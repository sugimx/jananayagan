"use client"

import dynamic from "next/dynamic"
const InvoicePdfDownloadButton = dynamic(
  () => import("@/components/layouts/user/InvoicePdfDownloadButton"),
  { ssr: false } 
)

import React from 'react'

const Invoice = () => {
    return (
        <>
            <InvoicePdfDownloadButton /> 
        </>
    )
}

export default Invoice