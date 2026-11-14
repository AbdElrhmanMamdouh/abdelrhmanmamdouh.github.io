---
title: "Android 15 and Linux guests under two hypervisors"
short: "Android & Linux guests"
hook: "Bringing up Android 15 and Linux guests on Xen and QNX on a new automotive SoC, adapting the BSP from the evaluation board to the A-sample, and debugging the hardware."
context: "High-performance cockpit platform · Tier-1 supplier"
period: "02/2026 – present"
role: "Android and hypervisor integration and bring-up engineer"
team: "client and supplier team"
order: 0
featured: true
confidentiality: "client"
approval: "pending"
page: "summary"
areas: ["Embedded Linux", "Automotive", "Connectivity"]
tags: ["Embedded Linux", "Board bring-up / BSP", "Xen", "QNX Hypervisor", "Android 15 / AAOS", "Device trees", "Linux kernel", "Yocto", "USB", "Bluetooth"]
skills:
  - { name: "C", level: "production" }
  - { name: "Linux kernel / drivers", level: "production" }
  - { name: "Device trees", level: "production" }
  - { name: "Yocto", level: "production" }
  - { name: "Hypervisors (Xen, QNX)", level: "production" }
  - { name: "Android / AAOS / AOSP", level: "production" }
  - { name: "Bluetooth Classic / BLE", level: "production" }
  - { name: "System architecture", level: "built" }
metrics:
  - { value: "2", label: "hypervisors, Xen and QNX, running Android 15" }
  - { value: "EVB → A-sample", label: "BSP adapted to the first real hardware" }
---

## In short

On this cockpit platform, one chip runs several operating systems side by side under a hypervisor: Android Automotive for infotainment, Linux for drivers and the instrument cluster, and a small control domain. The chip was new, its board support package (BSP) had been written for the evaluation board, and the product had to run on two hypervisors, Xen and QNX. My job was to bring the platform up and make it work on both: Android, the Linux guests, the hardware passed through to them, and the first real product hardware (the A-sample).

## What I did

**Android 15 on the hypervisors**
- Ported the infotainment product to Android 15: the app, the build manifests, the emulator target and the hardware target.
- Adapted and tested Android on each new Xen platform release, and built the demo configuration that runs Android and the Linux instrument cluster side by side.
- Brought the Android guest up on QNX Hypervisor as well, with its hardware passthrough and device-tree overlays.

**Linux guests and the build**
- Worked through guest configurations, device-tree overlays, and passing memory ranges, interrupts, clocks and pin control between domains.
- Created the Yocto build for the cluster Linux: a custom layer adding Qt 6 and the cluster apps, one build script, and board image targets.

**From evaluation board to A-sample**
- Adapted the BSP, written for the evaluation board, to the A-sample hardware: device-tree fixes, GPIO hogs for the display power lines, and the USB 2.0 controller and PHY.
- Passed USB through to the Android guest, on Xen and on QNX.
- Flashed and brought up the full boot chain on the A-sample: boot loaders, real-time core firmware, ATF, U-Boot and the hypervisor.
- Adapted the camera stack (EVS) to the new camera's frame size.

**Hardware debugging**
- Debugged at board level with the team: UART ownership and flow control, clocks shared between domains, GPIO enable and reset lines, interrupt delivery through the hypervisor, firmware loading at boot, and the board's Ethernet switch and PHY path.
- One example: on QNX, a peripheral never answered and its interrupt counter stayed at zero. The Linux GPIO driver had no support for the new chip's GPIO block, so an enable line was never driven. I added that support with the correct register offsets.

**Bluetooth, as one part of it**
- Owned the Bluetooth bring-up: found the radio was on a dedicated UART, not PCIe as assumed, moved it from the Linux driver domain to Android, and backported the driver support the Android kernel was missing. Android Bluetooth now works with the car profiles and a real phone on Xen, and Bluetooth is up on the QNX guest too.

## Also on this platform

Crash analysis of third-party apps from logs and tombstones, a Wi-Fi passthrough plan with ownership split between domains, and a suspend-to-RAM design across all domains.

## What I can go deeper on in an interview

How to decide which domain owns a device; how an evaluation-board BSP breaks on real hardware; how to debug an interrupt that never arrives through a hypervisor.
