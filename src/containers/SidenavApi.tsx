import React, { useState } from 'react'
import Sidenav from '../components/Sidenav'

export default function SidenavApi() {

  const dataJson = [{
    "id": 1,
    "lessonName": "Business Development",
    "title": "Ms",
    "description": "Fracture of condylar process of left mandible, subsequent encounter for fracture with nonunion",
    "price": "$15.62",
    "teacherId": 1
  }, {
    "id": 2,
    "lessonName": "Services",
    "title": "Dr",
    "description": "Nondisplaced fracture of lateral malleolus of left fibula, subsequent encounter for open fracture type I or II with malunion",
    "price": "$13.32",
    "teacherId": 2
  }, {
    "id": 3,
    "lessonName": "Research and Development",
    "title": "Honorable",
    "description": "Diphtheritic tubulo-interstitial nephropathy",
    "price": "$10.71",
    "teacherId": 3
  }, {
    "id": 4,
    "lessonName": "Marketing",
    "title": "Mrs",
    "description": "Adult sexual abuse, confirmed, subsequent encounter",
    "price": "$12.27",
    "teacherId": 4
  },
     {
      "id": 5,
      "lessonName": "Support",
      "title": "Mrs",
      "description": "Metabolic encephalopathy",
      "price": "$13.24",
      "teacherId": 5
    }, {
      "id": 6,
      "lessonName": "Business Development",
      "title": "Mr",
      "description": "Unspecified cause of accidental drowning and submersion, subsequent encounter",
      "price": "$17.25",
      "teacherId": 6
    }, {
      "id": 7,
      "lessonName": "Accounting",
      "title": "Mr",
      "description": "Encounter for observation for suspected exposure to other biological agents ruled out",
      "price": "$11.53",
      "teacherId": 7
    }
  ]


  return (
    <div>
      {/* {dataJson.map((data) => (
        <Sidenav lessonName={data.lessonName}
         />))} */}
    </div>
  )
}
