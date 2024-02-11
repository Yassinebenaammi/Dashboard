import React from "react";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdSettings,
  MdHelp,
  MdPerson,
  MdOutlineDateRange,
  MdTimer
} from "react-icons/md";

import {PiStudentFill} from "react-icons/pi";

export const menuItems = [
  {
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Students",
        path: "/dashboard/students",
        icon: <PiStudentFill />
        ,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Reservations",
        path: "/dashboard/reservations",
        icon: <MdTimer />,
      },
      {
        title: "Encadrants",
        path: "/dashboard/encadrants",
        icon: <MdPerson />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelp />,
      },
    ],
  },
];


export const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]


export const cardItems = [
  {
    nombre: 234,
    path: "/students",
    icon: <MdPerson />,
    title:"Nombre Des Etudiants"
 
  },
  {
    nombre: 25,
    path: "/students",
    icon: <MdOutlineDateRange />,
    title:"Nombre Des Reservations",


  },
  {
    nombre: 48,
    path: "/students",
    icon: <MdPeople />,
    title:"Nombre Des Equipes"


  },
]
  
