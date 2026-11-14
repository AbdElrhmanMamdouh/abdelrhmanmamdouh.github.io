---
title: "Bluetooth for an Android 15 guest under two hypervisors"
short: "Cockpit Bluetooth"
hook: "Brought up a UART Bluetooth radio inside an Android 15 guest on Xen, then again on QNX Hypervisor, down to a missing GPIO driver."
context: "High-performance cockpit platform · Tier-1 supplier"
period: "02/2026 – present"
role: "Android and hypervisor integration engineer; owner of the Bluetooth bring-up"
team: "client and supplier team"
order: 2
featured: true
confidentiality: "client"
approval: "pending"
page: "summary"
areas: ["Embedded Linux", "Connectivity", "Automotive"]
tags: ["Embedded Linux", "Linux kernel", "Device trees", "Xen", "QNX Hypervisor", "Android 15 / AAOS", "Bluetooth", "Yocto"]
skills:
  - { name: "C", level: "production" }
  - { name: "Bluetooth Classic / BLE", level: "production" }
  - { name: "Linux kernel / drivers", level: "production" }
  - { name: "Device trees", level: "production" }
  - { name: "Yocto", level: "production" }
  - { name: "Hypervisors (Xen, QNX)", level: "production" }
  - { name: "Android / AAOS / AOSP", level: "production" }
  - { name: "System architecture", level: "built" }
metrics:
  - { value: "2", label: "hypervisors, Xen and QNX, validated on hardware" }
  - { value: "8", label: "car Bluetooth profiles working in Android" }
---

## In short

On this cockpit platform, Android Automotive runs as a guest on a hypervisor. The Bluetooth radio is real hardware on a serial (UART) line. Getting Android to own that radio meant passing hardware through the hypervisor, on a new chip generation, with an Android kernel that did not know the radio yet. I owned that bring-up end to end, including the bench tests.

## What I did

- **Found the real wiring.** The radio turned out to be on a dedicated 4-wire UART with hardware flow control, not on PCIe as first assumed.
- **Fixed the ownership design.** The control domain must not own drivers, so the UART and Bluetooth stack belong elsewhere. I proved Bluetooth first in the Linux driver domain (scan, pair, connect, survives reboot), then passed the UART through to the Android guest.
- **Backported driver support.** The pinned Android kernel was too old for this radio, so I backported support from mainline Linux.
- **Second hypervisor.** On QNX the radio stayed silent. The cause: the Linux GPIO driver had no support for the new chip's GPIO block, so the radio's enable line was never driven. I added that support.

## Result

Android Bluetooth turns on, the car profiles start (audio, media control, hands-free, messages, phonebook, networking, BLE), and a real phone pairs and connects. Bluetooth also runs on the QNX guest.

## Also on this platform

Porting an infotainment product to Android 15, early board bring-up (device trees, USB, boot chain), the Yocto build for the cluster Linux, the camera stack, crash analysis from logs and tombstones, and a suspend-to-RAM design across domains.
