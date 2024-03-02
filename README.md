# MMCd Datalogger
Web automotive diagnostic and datalogging tool compatible with many pre-OBDII (1990-1994) Mitsubishi vehicles.

# About the Hardware
All following info has been verified on my Mitsubishi Galant E33A (4G63 SOHC), but it should apply on other pre-OBDII ECUs as well.
There's absolutely NO WARRANTY on info and software, you can use it at your own risk.
How to make your own datalogging cable...

ALDL diagnostic connector:

![ALDL diagnostic connector](https://github.com/illja96/mmcdlogger/blob/main/diag-conn.jpg)

When pin (10) is shorted to ground (12) ECU enters diagnostic mode.
In this mode pin (1) is used to exchange diagnostic data with a scan tool. Serial communication is done using 1953 baud, 8 bit, 1 stop bit, no parity, TTL(?) levels.
I used the following RS-232 adapter (taken from Club DSM Colorado):

![RS-232 adapter 1 schematics](https://github.com/illja96/mmcdlogger/blob/main/ecu-rs232.jpg)

I replaced MAX233 with ST232BD, added required external capacitors and power indication LED:

![RS-232 adapter 2 schematics](https://github.com/illja96/mmcdlogger/blob/main/schematics.gif)
![RS-232 adapter 2 PCB top](https://github.com/illja96/mmcdlogger/blob/main/pcb-top.jpg)
![RS-232 adapter 2 PCB bottom](https://github.com/illja96/mmcdlogger/blob/main/pcb-bottom.jpg)

# Related projects
Original PalmOS MMCd Datalogger developer: [Dmitry Yurtaev](https://mmcdlogger.sourceforge.net)
Extended PalmOS MMCd Datalogger developer: [Steve Schaefer](https://github.com/stephenjschaefer/MMCd)