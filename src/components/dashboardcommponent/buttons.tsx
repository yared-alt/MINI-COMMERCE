"use client"
import React from 'react'
// import { Eye,Trash2,Pencil } from 'lucide-react';

 function buttons({ type }:{type:string}) {
    var I;
    switch (type) {
        case "Eye":
            I =  import("lucide-react").then((module) => module.Eye)
            break;
        case "Pencil":
            I =  import("lucide-react").then((module) => module.Pencil)
            break;
        case "Trash2":
            I =  import("lucide-react").then((module) => module.Trash2)
            break;
        case "BadgePlus":
            I =  import("lucide-react").then((module) => module.BadgePlus)
            break;

        case "ArrowDownToLine":
            I =  import("lucide-react").then((module) => module.ArrowDownToLine)
            break;


        case "ChevronsUpDown":
            I =  import("lucide-react").then((module) => module.ChevronsUpDown)
            break;

        default:
            break;
    }
    // console.log(I)
    return <I />;

}

export default buttons;
