import { createContext, useState, useEffect } from "react";
export const deviceContext = createContext();

function DeviceProvider({ children }) {
    let startState = '';
    if (window.innerWidth >= 950) {
        startState = 'hidden';
    }
    else {
        startState = false;
    }

    const [initial, setInitial] = useState(startState);

    useEffect(() => {
        if (window.innerWidth >= 950) {
            setInitial('hidden');
        }
        else {
            setInitial(false);
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth >= 950) {
                setInitial('hidden');
            }
            else {
                setInitial(false);
            }
        });
    }, []);

    return (
        <deviceContext.Provider
            value={initial}
        >
            {children}
        </deviceContext.Provider>
    )
}

export default DeviceProvider;