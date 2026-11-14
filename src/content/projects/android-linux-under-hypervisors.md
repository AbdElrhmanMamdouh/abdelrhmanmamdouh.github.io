---
title: "Android 15 and Linux guests under two hypervisors"
short: "Android & Linux guests"
hook: "Platform bring-up on a new automotive SoC: Android 15 (AAOS) and Linux guests on Xen and QNX Hypervisor, device passthrough between domains, and a BSP moved from the evaluation board to the A-sample."
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
metrics: []
---

## The platform

A cockpit computer runs several operating systems on one SoC. On this one, Xen splits the chip into a thin control domain that owns no hardware, a Linux driver domain that also hosts the Qt instrument cluster, and an Android Automotive guest for infotainment. The same product also has to run on QNX Hypervisor, with Android as a guest there too.

The SoC was a new generation, and its BSP had been written for the evaluation board. My work has been to bring the platform up on both hypervisors and on the first product hardware, the A-sample, and to keep digging until each piece of hardware works in the domain that should own it.

## Android 15 on Xen and QNX

I ported the infotainment product to Android 15: the app, the repo manifests, the emulator target and the hardware device target, with the platform built by Soong and the kernel by Kleaf. As new Xen platform releases arrived, I adapted Android to each one and integrated the product on top. I also put together the demo configuration that runs Android and the Linux cluster side by side. On QNX Hypervisor I brought the Android guest up with its own passthrough configuration and device-tree overlays.

## Linux domains and device ownership

I wrote guest configurations and device-tree overlays, and assigned each device's MMIO ranges and interrupts to the domain that owns it. Clocks and pin control cannot be split that way, so the driver domain keeps those controllers and the guest gets only the device. For the cluster side I created the Yocto build: a custom layer on top of the SoC vendor's Yocto BSP layer that adds Qt 6 and the cluster apps, a single build script, and image targets for each board.

## From the evaluation board to the A-sample

On the A-sample I fixed device trees, added GPIO hogs for the display power rails, enabled the DWC3 controller in USB 2.0 high-speed mode with its PHY, passed USB through to Android on both hypervisors. I flashed and brought up the whole boot chain on UFS: the IPLs, the real-time core firmware, TF-A (ATF) and OP-TEE, U-Boot and the hypervisor. I also adapted the EVS camera HAL to the new camera's frame format.

## Hardware debugging

On the bench I worked through UART ownership and RTS/CTS flow control, clocks shared between domains, GPIO enable and reset sequencing, interrupt delivery through the hypervisor, firmware that had to be loaded before Android's dynamic partitions mount, and the board's Ethernet switch and SGMII PHY path.

In the Android guest on QNX Hypervisor, a UART peripheral never answered and its interrupt counter stayed at zero. The driver was fine, and so was the interrupt mapping. The cause was in the guest kernel's GPIO driver: it had no support for the new SoC's GPIO block, whose register layout differs from the previous generation, so the enable line was never driven. I compared it against the working QNX GPIO driver, added support for the new block with the correct register offsets, and the device came up.

## Bluetooth, as one part of the bring-up

I owned Bluetooth end to end. The radio turned out to sit on a dedicated 4-wire UART, not on PCIe as the ticket assumed. I proved it first in the Linux driver domain with BlueZ (scan, pair, connect, and bonds kept across reboots), then moved the UART to the Android guest. The Android kernel's HCI UART driver predated this radio, so I backported support from mainline Linux, packaged the firmware into vendor_boot, and disabled the emulator's virtual HCI controller so that only the real one remained. Android Bluetooth now runs the head-unit roles (A2DP Sink, AVRCP Controller, HFP Hands-Free, MAP and PBAP client, PAN) and BLE GATT, and pairs with a real phone.

## Around it

I also root-caused crashes in third-party apps from logcat and tombstones, planned Wi-Fi passthrough over PCIe with ownership split between the driver domain and Android, and designed suspend-to-RAM across all domains using PSCI SYSTEM_SUSPEND.
