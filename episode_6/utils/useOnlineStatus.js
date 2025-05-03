import { useEffect, useState } from "react";

export const useOnlineStatus = () => {
    const [onlineStatus, setonlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener('offline', function () {
            setonlineStatus(false);
        })

        window.addEventListener('online', function () {
            setonlineStatus(true);
        });
    }, []);

    return onlineStatus;
}