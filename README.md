# MMCd Datalogger
Web automotive diagnostic and datalogging tool compatible with many pre-OBDII (1990-1994) Mitsubishi vehicles.

Heavily inspired by original PalmOS [MMCd Datalogger](https://mmcdlogger.sourceforge.net).
Also big thanks for [E932-E931 commented source](https://github.com/Data-ptr/E932-E931-Commented-Source).

# Disclaimer
ALL INCLUDED SOFTWARE, HARDWARE AND DOCUMENTATION ARE PROVIDED "AS IS".
THE CONTENT IS PROVIDED WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF TITLE, NON-INFRINGEMENT OR IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE OR OTHERWISE, OTHER THAN THOSE WARRANTIES WHICH ARE INCAPABLE OF EXCLUSION, RESTRICTION OR MODIFICATION UNDER APPLICABLE LAW.
THERE IS NO WARRANTY THAT THE INFORMATION OF THE SITE IS ACCURATE, RELIABLE OR CORRECT; THAT THE SITE WILL BE AVAILABLE AT ANY PARTICULAR TIME OR LOCATION; THAT ANY DEFECTS OR ERRORS WILL BE CORRECTED; THAT THE CONTENT IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS; OR THAT YOU WILL ACHIEVE SUCCESSFUL RESULTS FROM FOLLOWING ANY INSTRUCTIONS, DIRECTIONS OR RECOMMENDATIONS ON THE SITE.

# Demo
Application hosted on [GitHub pages](https://illja96.github.io/mmcdlogger/).

# Limitations
Application is fully functional only on platforms with native [Web Serial API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Serial_API) support.

[Serial API polyfill](https://github.com/google/web-serial-polyfill) is installed to expand list of compatible platforms utilizing [USB Web API](https://developer.mozilla.org/en-US/docs/Web/API/USB) instead.
Only [USB CDC](https://en.wikipedia.org/wiki/USB_communications_device_class) friendly adapters will work in this case.
Most of serial adapters (FTDI, Prologic, Silicon Labs, CH340, etc.) requires proprietary drivers and aren't USB CDC compatible.

- Full support: Windows and Linux OS
- Partial support (USB CDC supported adapters only): ChromeOS and Android
- No support: iOS and macOS

# Hardware
In order to exchange diagnostic data between web application and car you will need 1 or 2 adapter(s) depending on your system:

1. ADLD/ODB1 to RS232 adapter

   You can find ready-to-use USB or COM adapters on the web.
   Also you can use my [PCB design](https://oshwlab.com/saskiuhia/mitsubishi-aldl-rs232-adapter-max233) to build this adapter yourself.

   ***Notes:*** most of the adapters multiplex TX data to RX wire, so any request message will be duplicated as a reply immediately and should be ignored.

2. RS232 to USB adapter, if your system doesn't have physical COM port built-in

   RS232 to USB adapters tend to have problems.
   In theory, almost anyone should work.
   In practice, many USB-UART ICs are counterfeited and/or have poor QC, so it will vary even for the same chip.
   
   Personally, I have encountered problems with Prologic based adapter: response data corruption, only commands work, but queries won't.
   FTDI based adapter works perfectly.
   To debug adapter, I would recommend send queries/commands via simplistic terminal application, like: [RealTerm](https://sourceforge.net/projects/realterm)

# Software
## Diagnostic protocol
Diagnostic data communication protocol is UART based (1953 baud, 8 bit, 1 stop bit, no parity) in 1 byte request-reply mode with 12V logic level utilizing only a single wire.

### Queries
|Name|Address|Description|Formula|Units|
|----|-------|-----------|-------|-----|
|PORT1|0x00|Port 1 data register|||
|PORT2|0x01|Port 2 data register|||
|PORT3|0x02|Port 3 data register|||
|PORT4|0x03|Port 4 data register|||
|PORT5|0x04|Port 5 data register|||
|PORT6|0x05|Port 6 data register|||
|TIMADV|0x06|Timing advance|x - 10|°|
|ETC-R|0x07|Engine coolant temperature (raw)|ECT curve|°C|
|ISC-0|0x08|Long term correction factors/feedback for the ISC step adjustment|||
|ISC-Y0|0x09|Short term correction factors/feedback for the ISC step adjustment|||
|ISC-1|0x0A|Long term learning variable when A/C is on|||
|ISC-Y1|0x0B|ISC learning variable when A/C is on and PS is off|||
|FTRIM-L|0x0C|Fuel trim (low)|.78 * x|%|
|FTRIM-M|0x0D|Fuel trim (middle)|.78 * x|%|
|FTRIM-H|0x0E|Fuel trim (high)|.78 * x|%|
|O2-FBK|0x0F|Oxygen feedback trim|.78 * x|%|
|ECT-F|0x10|Engine coolant temperature (filtered)|ECT curve|°C|
|IAT-C|0x11|Intake air temperature (checked)|IAT curve|°C|
|EGRT|0x12|Exhaust gas recirculation temperature|-2.7 * x + 597.7|°F|
|O2-R|0x13|Oxygen sensor|.0195 * x|V|
|BATT|0x14|Battery voltage|.0733 * x|V|
|BARO|0x15|Atmospheric pressure|.00486 * x|bar|
|ISC-C|0x16|Current ISC step||step(s)|
|TPS-R|0x17|Throttle position|100 * x / 255|%|
|CLMF|0x18|Closed loop mode flags||flags|
|FTRIM-F|0x19|Fuel trim flags||flags|
|MAF|0x1A|Mass airflow sensor pulse frequency|6.25 * x|Hz|
|FTRIM-1B|0x1B|Fuel trim (low 0x1B)|.78 * x|%|
|AIRVOL|0x1C|Air volume|||
|ACCENR|0x1D|Acceleration enrichment|100 * x / 255|%|
|STATE1|0x1E|Engine start-up stages and running condition state flags||flags|
|FTRIM-1F|0x1F|Fuel trim (low 0x1F)|.78 * x|%|
|RPM-8|0x20|RPM (8)|x * 7.8125|RPM|
|RPM-31|0x21|RPM (31)|x * 31.25|RPM|
|PORT3-S1|0x22|Port 3 snapshot (1)|||
|ISC-LF|0x23|ISC learning flags||flags|
|RPM-CT|0x24|Current target idle speed|x * 7.8125|RPM|
|ISC-T|0x25|Target ISC step||step(s)|
|KNOCK|0x26|Current knock sum|||
|PORT3-S0|0x27|Port 3 snapshot (0)|||
|PORT4-S|0x28|Port 4 snapshot|||
|INJ-PW|0x29|Injector pulse width|.256 * x|ms|
|INJ-PW1|0x2A|Injector pulse width (+1)|.256 * x|ms|
|COIL|0x2B|Coil energization time||||
|AIR-C0|0x2C|Air count (0)|||
|AIR-C1|0x2D|Air count (1)|||
|INJ-F|0x2E|Global injector factor|||
|INJ-F1|0x2F|Global injector factor (+1)|||
|ISC-F0|0x30|ISC flags||flags|
|TEMP1|0x31|Temporary value 1|||
|TEMP2|0x32|Temporary value 2|||
|TEMP3|0x33|Temporary value 3|||
|TEMP4|0x34|Temporary value 4|||
|TEMP5|0x35|Temporary value 5|||
|O2-BC|0x36|Oxygen sensor bad counter|||
|EGRT-BC|0x37|Exhaust gas recirculation temperature bad counter|||
|FAULT-H|0x38|Faults (high byte)||flags|
|FAULT-L|0x39|Faults (low byte)||flags|
|IAT-R|0x3A|Intake air temperature (raw)|IAT curve|°C|
|FAULT-SH|0x3B|Stored faults (high byte)||flags|
|FAULT-SL|0x3C|Stored faults (low byte)||flags|
|FTRIM-3D|0x3D|Fuel trim (low 0x3D)|.78 * x|%|
|ECUVER|0xFD|ECU Version|||

### Commands
|Description|Address|Duration|Return values|Notes|
|-----------|-------|--------|-------------|-----|
|Clear faults|0xCA|Immediately|0x00 if engine is stopped, 0xFF if engine is running|Works only if engine is stopped|
|Activate boost control solenoid|0xF1|~6 seconds|0x00 if engine is stopped, 0xFF if engine is running|Works only if engine is stopped|
|Activate EGR solenoid|0xF3|~6 seconds|0x00 if engine is stopped, 0xFF if engine is running|Works only if engine is stopped|
|Activate fuel pressure solenoid|0xF4|~6 seconds|0x00 if engine is stopped, 0xFF if engine is running|Works only if engine is stopped|
|Activate purge solenoid|0xF5|~6 seconds|0x00 if engine is stopped, 0xFF if engine is running|Works only if engine is stopped|
|Turn on fuel pump|0xF6|~6 seconds|0x00 if engine is stopped, 0xFF if engine is running|Works only if engine is stopped|
|Disable injector 6|0xF7|~6 seconds|0x00||
|Disable injector 5|0xF8|~6 seconds|0x00||
|Disable injector 4|0xF9|~6 seconds|0x00||
|Disable injector 3|0xFA|~6 seconds|0x00||
|Disable injector 2|0xFB|~6 seconds|0x00||
|Disable injector 1|0xFC|~6 seconds|0x00||
|Resistor strapping low word|0x00|||Not tested|
|Resistor strapping high word|0x00|||Not tested|

# Development
- Install [Node.JS](https://nodejs.org/en/download)
- Download source files
- Run `npm install` in project folder
- Run `npm run serve` in project folder
- Open [localhost:4200](http://localhost:4200) in web browser
