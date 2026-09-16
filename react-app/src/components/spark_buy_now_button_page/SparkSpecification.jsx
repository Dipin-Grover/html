import React, { useState } from "react";

const SparkSpecification = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSpecification = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-4">
        <h2 className="fw-bold mb-2 text-dark fs-2 letter-spacing-1">
          SPECIFICATION
        </h2>

        <button
          className="btn text-primary text-decoration-none fs-6 d-inline-flex align-items-center gap-2"
          id="spec-toggle-btn"
          type="button"
          onClick={toggleSpecification}
          aria-expanded={isOpen}
        >
          <span>{isOpen ? "Close" : "Open"}</span>

          <i
            id="spec-toggle-icon"
            className={
              isOpen
                ? "far fa-chevron-up"
                : "far fa-chevron-down"
            }
          />
        </button>
      </div>

      {/* Specification Table */}
      {isOpen && (
        <div id="specTableCollapse">
          <div className="table-responsive">

            <table
              className="table table-bordered mb-0 spec-table-font"
              style={{
                border: "5px solid #ebe4e4",
                "--bs-table-border-color": "#ebe4e4",
              }}
            >

              {/* Table Header */}
              <thead className="bg-light">
                <tr>
                  <th className="py-3 px-4 border-0 text-secondary bg-light text-nowrap">
                    Product Model
                  </th>

                  <th className="py-3 px-4 border-0 text-center text-secondary bg-light">
                    65"
                  </th>

                  <th className="py-3 px-4 border-0 text-center text-secondary bg-light">
                    75"
                  </th>

                  <th className="py-3 px-4 border-0 text-center text-secondary bg-light">
                    86"
                  </th>

                  <th className="py-3 px-4 border-0 text-center text-secondary bg-light">
                    98"
                  </th>
                </tr>
              </thead>

              <tbody>

                {/* Model No */}
                <tr>
                  <td className="py-3 px-4 text-secondary">
                    Model No.
                  </td>

                  <td className="py-3 px-4 text-center text-secondary">
                    DV65S13
                  </td>

                  <td className="py-3 px-4 text-center text-secondary">
                    DV75S13
                  </td>

                  <td className="py-3 px-4 text-center text-secondary">
                    DV86S13
                  </td>

                  <td className="py-3 px-4 text-center text-secondary">
                    DV98S13
                  </td>
                </tr>

                {/* Part Number */}
                <tr>
                  <td className="py-3 px-4 text-secondary">
                    Part Number
                  </td>

                  <td className="py-3 px-4 text-center text-secondary">
                    S65432
                  </td>

                  <td className="py-3 px-4 text-center text-secondary">
                    S75432
                  </td>

                  <td className="py-3 px-4 text-center text-secondary">
                    S86432
                  </td>

                  <td className="py-3 px-4 text-center text-secondary">
                    S98432
                  </td>
                </tr>

                {/* DISPLAY */}
                <tr>
                  <td
                    colSpan="5"
                    className="fw-bold py-3 px-4 border-bottom-0 bg-light"
                  >
                    Display
                  </td>
                </tr>

                <SpecRow
                  label="Panel Type"
                  values={["IPS", "IPS", "IPS", "IPS"]}
                />

                <SpecRow
                  label="Back Light"
                  values={["D-LED", "D-LED", "D-LED", "D-LED"]}
                />

                <SpecRow
                  label="Active Display Area"
                  values={[
                    "(L) 1515 (W) 98 (H) 945 mm",
                    "(L) 1745 (W) 110 (H) 1070 mm",
                    "(L) 1990 (W) 114 (H) 1213 mm",
                    "(L) 1990 (W) 114 (H) 1213 mm",
                  ]}
                />

                <SpecRow
                  label="Resolution"
                  values={[
                    "3840 x 2160 (4K, RGB)",
                    "3840 x 2160 (4K, RGB)",
                    "3840 x 2160 (4K, RGB)",
                    "3840 x 2160 (4K, RGB)",
                  ]}
                />

                <SpecRow
                  label="Contrast Ratio"
                  values={[
                    "1200:1",
                    "1200:1",
                    "1200:1",
                    "1200:1",
                  ]}
                />

                <SpecRow
                  label="Brightness"
                  values={[
                    "450 CD/M2",
                    "450 CD/M2",
                    "450 CD/M2",
                    "450 CD/M2",
                  ]}
                />

                <SpecRow
                  label="Display Colors"
                  values={[
                    "1.07B (10 BIT)",
                    "1.07B (10 BIT)",
                    "1.07B (10 BIT)",
                    "1.07B (10 BIT)",
                  ]}
                />

                <SpecRow
                  label="Aspect Ratio"
                  values={["16:9", "16:9", "16:9", "16:9"]}
                />

                <SpecRow
                  label="Dynamic Aspect Ratio"
                  values={[
                    "30000:1",
                    "30000:1",
                    "30000:1",
                    "30000:1",
                  ]}
                />

                <SpecRow
                  label="Response Time"
                  values={[
                    "2-5 ms",
                    "2-5 ms",
                    "2-5 ms",
                    "2-5 ms",
                  ]}
                />

                <SpecRow
                  label="Viewing Angle"
                  values={[
                    "178°(H) / 178°(W)",
                    "178°(H) / 178°(W)",
                    "178°(H) / 178°(W)",
                    "178°(H) / 178°(W)",
                  ]}
                />

                <SpecRow
                  label="LED Life Time"
                  values={[
                    "60000 HRS",
                    "60000 HRS",
                    "60000 HRS",
                    "60000 HRS",
                  ]}
                />

                <SpecRow
                  label="Bonding Technology"
                  values={[
                    "ZERO BONDING",
                    "ZERO BONDING",
                    "ZERO BONDING",
                    "ZERO BONDING",
                  ]}
                />

                <SpecRow
                  label="Screen Protector"
                  values={[
                    "3MM TEMPERED AG GLASS / 8MOHS",
                    "3MM TEMPERED AG GLASS / 8MOHS",
                    "3MM TEMPERED AG GLASS / 8MOHS",
                    "3MM TEMPERED AG GLASS / 8MOHS",
                  ]}
                />

                {/* SPEAKER */}
                <SpecSection title="Speaker" />

                <SpecRow
                  label="Sound Output"
                  values={[
                    "20Wx2",
                    "20Wx2",
                    "20Wx2",
                    "20Wx2",
                  ]}
                />

                {/* POWER PARAMETERS */}
                <SpecSection title="Power Parameters" />

                <SpecRow
                  label="Power (No PC)"
                  values={[
                    "≤250 W",
                    "-",
                    "-",
                    "-",
                  ]}
                />

                <SpecRow
                  label="Working Voltage"
                  values={[
                    "100V~240V AC",
                    "100V~240V AC",
                    "100V~240V AC",
                    "100V~240V AC",
                  ]}
                />

                <SpecRow
                  label="Standby Power"
                  values={[
                    "< 0.5W",
                    "< 0.5W",
                    "< 0.5W",
                    "< 0.5W",
                  ]}
                />

                {/* ANDROID OS */}
                <SpecSection title="Android OS" />

                <SpecRow
                  label="Android System"
                  values={[
                    "Android 16",
                    "Android 16",
                    "Android 16",
                    "Android 16",
                  ]}
                />

                <SpecRow
                  label="RAM & ROM"
                  values={[
                    "DDR4 8GB & EMMC 128GB",
                    "DDR4 8GB & EMMC 128GB",
                    "DDR4 8GB & EMMC 128GB",
                    "DDR4 8GB & EMMC 128GB",
                  ]}
                />

                <SpecRow
                  label="CPU / GPU"
                  values={[
                    "OCTA CORE",
                    "OCTA CORE, Cortex A55, G52MP2",
                    "OCTA CORE, Cortex A55, G52MP2",
                    "OCTA CORE, Cortex A55, G52MP2",
                  ]}
                />

                <SpecRow
                  label="Wi-Fi"
                  values={[
                    <>
                      Wi-Fi 5, 802.11ac/b/g/n/a/ax
                      <br />
                      (2.4GHz + 5GHz) : Hotspot 5GHz
                    </>,
                    <>
                      Wi-Fi 5, 802.11ac/b/g/n/a/ax
                      <br />
                      (2.4GHz + 5GHz) : Hotspot 5GHz
                    </>,
                    <>
                      Wi-Fi 5, 802.11ac/b/g/n/a/ax
                      <br />
                      (2.4GHz + 5GHz) : Hotspot 5GHz
                    </>,
                    <>
                      Wi-Fi 5, 802.11ac/b/g/n/a/ax
                      <br />
                      (2.4GHz + 5GHz) : Hotspot 5GHz
                    </>,
                  ]}
                />

                <SpecRow
                  label="Bluetooth"
                  values={[
                    "Bluetooth 5.1",
                    "Bluetooth 5.1",
                    "Bluetooth 5.1",
                    "Bluetooth 5.1",
                  ]}
                />

                <SpecRow
                  label="Ethernet Network"
                  values={[
                    "10M/100M/1000M (Default)",
                    "10M/100M/1000M (Default)",
                    "10M/100M/1000M (Default)",
                    "10M/100M/1000M (Default)",
                  ]}
                />

                {/* INPUT & OUTPUT */}
                <SpecSection title="Input & Output" />

                <SpecRow
                  label="Back Interface"
                  values={[
                    "USB 3.0*2, Touch USB*1, Type C*1, HDMI IN*2, USB 2.0*1, Audio IN*1, DP IN*1, VGA*1, RJ45 IN*1, RJ45 OUT*1, HDMI OUT*1",
                    "USB 3.0*2, Touch USB*1, Type C*1, HDMI IN*2, USB 2.0*1, Audio IN*1, DP IN*1, VGA*1, RJ45 IN*1, RJ45 OUT*1, HDMI OUT*1",
                    "USB 3.0*2, Touch USB*1, Type C*1, HDMI IN*2, USB 2.0*1, Audio IN*1, DP IN*1, VGA*1, RJ45 IN*1, RJ45 OUT*1, HDMI OUT*1",
                    "USB 3.0*2, Touch USB*1, Type C*1, HDMI IN*2, USB 2.0*1, Audio IN*1, DP IN*1, VGA*1, RJ45 IN*1, RJ45 OUT*1, HDMI OUT*1",
                  ]}
                />

                <SpecRow
                  label="Front Connection"
                  values={[
                    "USB 3.0*2, HDMI IN*1 : Touch USB*1 : Type C*1",
                    "USB 3.0*2, HDMI IN*1 : Touch USB*1 : Type C*1",
                    "USB 3.0*2, HDMI IN*1 : Touch USB*1 : Type C*1",
                    "USB 3.0*2, HDMI IN*1 : Touch USB*1 : Type C*1",
                  ]}
                />

                {/* TOUCH PARAMETERS */}
                <SpecSection title="Touch Parameters" />

                <SpecRow
                  label="Touch Technology"
                  values={[
                    "INFRARED TECHNOLOGY (IR)",
                    "INFRARED TECHNOLOGY (IR)",
                    "INFRARED TECHNOLOGY (IR)",
                    "INFRARED TECHNOLOGY (IR)",
                  ]}
                />

                <SpecRow
                  label="Touch Points"
                  values={[
                    "WINDOWS & ANDROID SYSTEM : 60 TOUCH POINTS",
                    "WINDOWS & ANDROID SYSTEM : 60 TOUCH POINTS",
                    "WINDOWS & ANDROID SYSTEM : 60 TOUCH POINTS",
                    "WINDOWS & ANDROID SYSTEM : 60 TOUCH POINTS",
                  ]}
                />

                <SpecRow
                  label="Inductive Objects"
                  values={[
                    "FINGER OR PEN",
                    "FINGER OR PEN",
                    "FINGER OR PEN",
                    "FINGER OR PEN",
                  ]}
                />

                <SpecRow
                  label="Accuracy"
                  values={[
                    "Φ 1 MM",
                    "Φ 1 MM",
                    "Φ 1 MM",
                    "Φ 1 MM",
                  ]}
                />

                <SpecRow
                  label="Response Time"
                  values={[
                    "2 -5 MS",
                    "2 -5 MS",
                    "2 -5 MS",
                    "2 -5 MS",
                  ]}
                />

                <SpecRow
                  label="Operating System"
                  values={[
                    "SUPPORT WINDOWS, MAC, ANDROID, LINUX, CHORME",
                    "SUPPORT WINDOWS, MAC, ANDROID, LINUX, CHORME",
                    "SUPPORT WINDOWS, MAC, ANDROID, LINUX, CHORME",
                    "SUPPORT WINDOWS, MAC, ANDROID, LINUX, CHORME",
                  ]}
                />

                {/* ENVIRONMENT */}
                <SpecSection title="Environment" />

                <SpecRow
                  label="Environment"
                  values={[
                    <>
                      WORKING TEMPERATURE: 0º C~45º C
                      <br />
                      STORAGE TEMPERATURE: 20º C~60º C
                    </>,
                    <>
                      WORKING TEMPERATURE: 0º C~45º C
                      <br />
                      STORAGE TEMPERATURE: 20º C~60º C
                    </>,
                    <>
                      WORKING TEMPERATURE: 0º C~45º C
                      <br />
                      STORAGE TEMPERATURE: 20º C~60º C
                    </>,
                    <>
                      WORKING TEMPERATURE: 0º C~45º C
                      <br />
                      STORAGE TEMPERATURE: 20º C~60º C
                    </>,
                  ]}
                />

                <SpecRow
                  label="Storage & Working Humidity"
                  values={[
                    "10% ~ 90%",
                    "10% ~ 90%",
                    "10% ~ 90%",
                    "10% ~ 90%",
                  ]}
                />

                {/* PACKING PARAMETERS */}
                <SpecSection title="Packing Parameters" />

                <SpecRow
                  label="Physical Size"
                  values={[
                    "1490.6*904.8*88.95MM",
                    "1712.9*1030.9*89.15MM",
                    "1958.9*1169.75*89.15MM",
                    "1958.9*1169.75*89.15MM",
                  ]}
                />

                <SpecRow
                  label="Carton Size"
                  values={[
                    "1576*980*200MM",
                    "1785*1125*200MM",
                    "2040*1260*200MM",
                    "2040*1260*200MM",
                  ]}
                />

                <SpecRow
                  label="Net Weight"
                  values={[
                    "42+1 KG",
                    "54+1 KG",
                    "69+1 KG",
                    "69+1 KG",
                  ]}
                />

                <SpecRow
                  label="Gross Weight"
                  values={[
                    "56.5+1 KG",
                    "69+1 KG",
                    "83.8+1 KG",
                    "83.8+1 KG",
                  ]}
                />

                {/* STANDARD CONFIGURATION */}
                <SpecSection title="Standard Configuration" />

                <SpecRow
                  label="Mounting Hardware"
                  values={[
                    "Remote Control*1, Power Cable 1.8M*1, Stylus Pen*2, Wall Mounted Bracket*1",
                    "Remote Control*1, Power Cable 1.8M*1, Stylus Pen*2, Wall Mounted Bracket*1",
                    "Remote Control*1, Power Cable 1.8M*1, Stylus Pen*2, Wall Mounted Bracket*1",
                    "Remote Control*1, Power Cable 1.8M*1, Stylus Pen*2, Wall Mounted Bracket*1",
                  ]}
                  lastRow
                />

              </tbody>
            </table>

          </div>
        </div>
      )}
    </div>
  );
};




const SpecRow = ({ label, values, lastRow = false }) => {
  return (
    <tr>
      <td
        className={`py-3 px-4 text-secondary ${
          lastRow ? "border-bottom" : ""
        }`}
      >
        {label}
      </td>

      {values.map((value, index) => (
        <td
          key={index}
          className={`py-3 px-4 text-center text-secondary ${
            lastRow ? "border-bottom" : ""
          }`}
        >
          {value}
        </td>
      ))}
    </tr>
  );
};




const SpecSection = ({ title }) => {
  return (
    <tr>
      <td
        colSpan="5"
        className="fw-bold py-3 px-4 border-bottom-0 bg-light"
      >
        {title}
      </td>
    </tr>
  );
};

export default SparkSpecification;