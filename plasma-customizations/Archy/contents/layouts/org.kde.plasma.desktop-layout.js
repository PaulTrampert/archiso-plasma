var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometries-2560x1600": "",
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///usr/share/backgrounds/archlinux/split.png",
                    "SlidePaths": "/usr/share/wallpapers/"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor",
                            "popupHeight": "400",
                            "popupWidth": "560"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.piechart",
                            "title": "Total CPU Use"
                        },
                        "/SensorColors": {
                            "cpu/all/usage": "61,174,233"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"cpu/all/usage\"]",
                            "lowPrioritySensorIds": "[\"cpu/all/cpuCount\",\"cpu/all/coreCount\"]",
                            "totalSensors": "[\"cpu/all/usage\"]"
                        }
                    },
                    "plugin": "org.kde.plasma.systemmonitor.cpu"
                },
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor",
                            "popupHeight": "400",
                            "popupWidth": "560"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.piechart",
                            "title": "Memory Usage"
                        },
                        "/SensorColors": {
                            "memory/physical/used": "61,174,233"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"memory/physical/used\"]",
                            "lowPrioritySensorIds": "[\"memory/physical/total\"]",
                            "totalSensors": "[\"memory/physical/usedPercent\"]"
                        }
                    },
                    "plugin": "org.kde.plasma.systemmonitor.memory"
                },
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor",
                            "popupHeight": "220",
                            "popupWidth": "156"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.horizontalbars",
                            "title": "Disk Usage"
                        },
                        "/SensorColors": {
                            "disk/.*/usedPercent": "61,174,233",
                            "disk/7829a504-20a1-40f1-93d6-e01159e1c44c/usedPercent": "61,174,233",
                            "disk/all/usedPercent": "174,233,61",
                            "disk/e0b6e2aa-5d81-4638-88a2-61b8a0f6dde4/usedPercent": "233,61,174"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"disk/.*/usedPercent\"]",
                            "lowPrioritySensorIds": "[\"disk/all/total\"]",
                            "totalSensors": "[\"disk/all/usedPercent\"]"
                        }
                    },
                    "plugin": "org.kde.plasma.systemmonitor.diskusage"
                },
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor",
                            "popupHeight": "400",
                            "popupWidth": "560"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.linechart",
                            "title": "Network Speed"
                        },
                        "/SensorColors": {
                            "network/all/download": "61,174,233",
                            "network/all/upload": "233,120,61"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"network/all/download\",\"network/all/upload\"]"
                        }
                    },
                    "plugin": "org.kde.plasma.systemmonitor.net"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "509",
                            "popupWidth": "647"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "favoritesPortedToKAstats": "true",
                            "icon": "/usr/share/pixmaps/archlinux-logo.png",
                            "systemFavorites": "suspend\\,hibernate\\,reboot\\,shutdown"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                        "/General": {
                            "launchers": "preferred://filemanager,applications:org.kde.konsole.desktop,preferred://browser"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "451",
                            "popupWidth": "560"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.showdesktop"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 3.3333333333333335,
            "hiding": "normal",
            "location": "bottom",
            "maximumLength": 142.22222222222223,
            "minimumLength": 142.22222222222223,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
