import React from "react";
import ConnectHero from "../components/DeltaViewConnect/ConnectHero";
import MultiDeviceSharing from "../components/DeltaViewConnect/MultiDeviceSharing/MultiDeviceSharing";
import AvailableDisplays from "../components/DeltaViewConnect/DeltaViewDisplays/AvailableDisplays";
import MultiplePresenters from "../components/DeltaViewConnect/MultiplePresenters/MultiplePresenters";
import ControlSection from "../components/DeltaViewConnect/DeviceControl/ControlSection";
import SecureSection from "../components/DeltaViewConnect/Security/SecureSection";
import PanelSize from "../components/DeltaViewConnect/PanelSize";
import BlazeCta from "../components/blaze/BlazeCta";
import ConnectFAQ from "../../public/assets/img/DeltaviewConnect/ConnectFAQ";


const DeltaViewConnect = () => {
    return (
        <>
            <ConnectHero />
            <MultiDeviceSharing />
            <AvailableDisplays />
            <MultiplePresenters />
            <ControlSection />
            <SecureSection />
            <PanelSize />
            <BlazeCta />
            <ConnectFAQ />

        </>
    );
};

export default DeltaViewConnect;