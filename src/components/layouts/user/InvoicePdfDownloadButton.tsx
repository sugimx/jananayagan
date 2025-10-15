"use client";

import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer"
import { FaRupeeSign } from "react-icons/fa"

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#333333',
    padding: 40,
    color: '#F5D57A'
  }
})

const InvoicePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 3 }}>Invoice</Text>
        <Text style={{ fontSize: 12, marginTop: 18, marginBottom: 18 }}>#27346733-022</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 3 }}>
        <Text style={{ fontSize: 14, marginRight: 15, marginBottom: 6 }}>Invoice Date</Text>
        <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 6 }}>6 March, 2023</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center',  marginBottom: 3 }}>
        <Text style={{ fontSize: 14, marginRight: 15, marginBottom: 6 }}>Invoice Date</Text>
        <Text style={{ fontSize: 14, fontWeight: 'bold', marginBottom: 6 }}>6 March, 2023</Text>
      </View>
      <View style={{ width: '100%', height: 1, backgroundColor: '#4f4f4e', marginTop: 8, marginBottom: 30 }}></View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ fontSize: 14, marginRight: 40 }}>
          <Text style={{ marginBottom: 12 }}>Billed To</Text>
          <Text style={{ marginBottom: 8 }}>Din Djarin</Text>
          <Text style={{ marginBottom: 8 }}>9029 Salt Lake, Mandalor</Text>
          <Text style={{ marginBottom: 8 }}>dindjarin@gmail.com</Text>
          <Text style={{ marginBottom: 8 }}>(+254) 724-453-233</Text>
        </View>
        <View style={{ fontSize: 12, marginRight: 10 }}>
          <Text style={{ marginBottom: 12  }}>From</Text>
          <Text style={{ marginBottom: 8 }}>Jana Nayagan Mug Seller</Text>
          <Text style={{ marginBottom: 8 }}>9029 Arcane, Jupiter 2</Text>
          <Text style={{ marginBottom: 8 }}>www.jananayagan.com</Text>
          <Text style={{ marginBottom: 8 }}>(+254) 243-124-392</Text>
        </View>
      </View>
      <View style={{ marginTop: 40, marginBottom: 8 }}>
          <Text style={{ fontSize: 12 }}>This is an invoice sample. This message is set as default. You can always change it to whatever you like. Feel free.</Text>
      </View>
      <View style={{ marginTop: 35 }}>
          <View style={{ flexDirection: 'row', fontSize: 12, justifyContent: 'space-between', marginBottom: 4 }}>
              <Text style={{ marginRight: 10, width: '30%', fontSize: 14 }}>Description</Text>
              <Text style={{ marginRight: 10, width: '20%', textAlign: 'center', fontSize: 14 }}>Quantity</Text>
              <Text style={{ marginRight: 10, width: '20%', textAlign: 'center', fontSize: 14 }}>Price</Text>
              <Text style={{ marginRight: 10, width: '20%', textAlign: 'center', fontSize: 14 }}>Amount</Text>
          </View>
          <View style={{ width: '100%', height: 1, backgroundColor: '#4f4f4e', marginTop: 8, marginBottom: 8  }}></View>
          <View style={{ flexDirection: 'row', fontSize: 12, justifyContent: 'space-between' }}>
              <Text style={{ marginRight: 10, width: '30%', fontSize: 12  }}>Official Jana Nayagan Cup Limited Edition</Text>
              <Text style={{ marginRight: 10, width: '20%', textAlign: 'center', fontSize: 12 }}>5</Text>
              <Text style={{ marginRight: 10, width: '20%', textAlign: 'center', fontSize: 12 }}>400</Text>
              <Text style={{ marginRight: 10, width: '20%', textAlign: 'center', fontSize: 12 }}>2,000</Text>
          </View>
          <View style={{ width: '100%', height: 1, backgroundColor: '#4f4f4e', marginTop: 8, marginBottom: 8 }}></View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: 10, fontSize: 12 }}>
          <View>
            <Text style={{ marginRight: 45, marginBottom: 15 }}>Subtotal</Text>
            <Text style={{ marginRight: 45, marginBottom: 15 }}>Total excluding tax</Text>
            <Text style={{ marginRight: 45, marginBottom: 15 }}>Discount (2%)</Text>
            <Text style={{ marginRight: 45, marginBottom: 15 }}>Total</Text>
            <Text style={{ marginRight: 45, marginBottom: 15 }}>Amout Due</Text>
          </View>
          <View>
              <Text style={{ marginRight: 45, marginBottom: 15 }}>2,000</Text>
              <Text style={{ marginRight: 45, marginBottom: 15 }}>2,000</Text>
              <Text style={{ marginRight: 45, marginBottom: 15 }}>200</Text>
              <Text style={{ marginRight: 45, marginBottom: 15 }}>2,000</Text>
              <Text style={{ marginRight: 45, marginBottom: 15 }}>2,000</Text>
          </View>
      </View>
      <View>
        <Text style={{ fontSize: 12, marginTop: 30, marginBottom: 40 }}>This is a footer sample. You can add a special message to your user to thank them.</Text>
      </View>
      <View style={{ width: '100%', height: 1, backgroundColor: '#4f4f4e', marginTop: 25, marginBottom: 10 }}></View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 12 }}>#27346733-022 · $93,100 due 7 March, 2023</Text>
        <Text style={{ fontSize: 12 }}>Page 1 of 1</Text>
      </View>
    </Page>
  </Document>
);

export default function InvoicePdfDownloadButton() {
  return (
    <>
      <PDFDownloadLink
        document={<InvoicePDF />}
        fileName="invoice.pdf"
      >
        {({ loading }) => (
          <button className="border-1 border-[#F5D57A] px-7 py-2 text-xs text-white uppercase mb-2 cursor-pointer">
              {loading ? "loading..." : "Recipt Download"}
          </button>
        )}
      </PDFDownloadLink>
    </>
  );
}