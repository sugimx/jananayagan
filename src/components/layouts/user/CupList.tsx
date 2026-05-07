'use client'


import React, { useState, useEffect } from 'react'
import Container from './Container'
import { useAuthContext } from '@/contexts/AuthContext'


const maskPhoneString = (phone?: string) => {
  if (!phone) return ''
  let digitCount = 0
  let out = ''
  for (const ch of phone) {
    if (/[0-9]/.test(ch)) {
      digitCount += 1
      out += digitCount <= 6 ? '*' : ch
    } else {
      out += ch
    }
  }
  return out
}


const CupList = () => {
  const { token } = useAuthContext()
  const [phoneNumber, setPhoneNumber] = useState('')
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [hasSearched, setHasSearched] = useState(false)
  const [sampleDataRaw, setSampleDataRaw] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch cup list data from backend on mount
  useEffect(() => {
    const fetchCupList = async () => {
      try {
        const headers: Record<string, string> = {
          'Content-Type': 'application/json'
        }
        
        if (token) {
          headers['Authorization'] = `Bearer ${token}`
        }

        const response = await fetch(`${process.env.API_BASE_URL}/orders/cuplist/all`, {
          method: 'GET',
          headers
        })
        
        if (response.ok) {
          const data = await response.json()
          if (data.success && data.data) {
            setSampleDataRaw(data.data)
          }
        } else {
          console.error('Failed to fetch cup list:', response.status)
        }
      } catch (error) {
        console.error('Error fetching cup list:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchCupList()
  }, [token])

  const sampleData = sampleDataRaw
    .filter((item) => item.Cup && item.Cup.toString().trim() !== '')
    .map((item) => ({
      ...item,
      OriginalPhone: item.Phone, // Keep original phone for searching
      Phone: maskPhoneString(item.Phone),
    }))

  const handleSearch = () => {
    const q = phoneNumber.trim()
    if (!q) {
      setSearchResults([])
      setHasSearched(false)
      return
    }
    
    const results = sampleData.filter((item) =>
      item.OriginalPhone.includes(q)
    ).sort((a, b) => {
      const na = Number(a.Cup)
      const nb = Number(b.Cup)
      if (isNaN(na) || isNaN(nb)) return String(a.Cup).localeCompare(String(b.Cup))
      return na - nb
    })
    setSearchResults(results)
    setHasSearched(true)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <Container>
      <div className="max-w-[1200px] mx-auto my-6 md:my-10 px-3 md:px-4">
        <h1 className="text-center text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-white px-2">Search Your Order</h1>

        <div className="mb-6 md:mb-8 w-full max-w-xl mx-auto px-2">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="tel"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full sm:flex-1 border-2 border-[#F5BB0B] text-[#F5BB0B] outline-none rounded-lg py-2.5 md:py-3 px-3 md:px-4 bg-transparent text-base md:text-lg"
            />
            <button
              onClick={handleSearch}
              className="w-full sm:w-auto px-4 md:px-6 py-2.5 md:py-3 bg-[#F5BB0B] text-black rounded-lg font-semibold hover:bg-[#d4a00a] transition-colors whitespace-nowrap"
            >
              Search
            </button>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-8 md:py-12 px-4">
            <p className="text-gray-400 text-base md:text-lg">Loading...</p>
          </div>
        ) : hasSearched ? (
          <div className="mt-6 md:mt-8">
            {searchResults.length === 0 ? (
              <div className="text-center py-8 md:py-12 px-4">
                <p className="text-white text-base md:text-lg">No orders found for this phone number.</p>
                <p className="text-[#F5BB0B] text-sm mt-2">
                  Once you place an order, please wait up to 48 hours for your details to be updated.
                </p>
              </div>
            ) : (
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
                {searchResults.map((item, index) => (
                  <div 
                    key={`${item.Cup}-${index}`}
                    className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-gradient-to-br from-[#1a1a1a] to-[#0b0b0b] border-2 border-[#F5BB0B] rounded-xl p-4 md:p-6 shadow-lg hover:shadow-[#F5BB0B]/20 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center mb-4 md:mb-6">
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-[#F5BB0B] rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-black font-bold text-2xl md:text-3xl">{item.Cup}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 md:space-y-3">
                      <div>
                        <p className="text-gray-400 text-xs md:text-sm mb-1">Name</p>
                        <p className="text-white font-semibold text-sm md:text-base break-words">{item.Name}</p>
                      </div>
                      
                      <div>
                        <p className="text-gray-400 text-xs md:text-sm mb-1">Phone</p>
                        <p className="text-white font-semibold text-sm md:text-base break-all">{item.Phone}</p>
                      </div>
                      
                      <div>
                        <p className="text-gray-400 text-xs md:text-sm mb-1">Location</p>
                        <p className="text-white font-semibold text-sm md:text-base break-words">{item.Location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {searchResults.length > 0 && (
              <div className="mt-4 md:mt-6 text-center px-4">
                <p className="text-[#F5BB0B] text-xs md:text-sm">
                  Found {searchResults.length} order{searchResults.length > 1 ? 's' : ''} for this phone number
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-8 md:py-12 px-4">
            <p className="text-gray-400 text-base md:text-lg">Enter your phone number to search for your orders</p>
          </div>
        )}
      </div>
    </Container>
  )
}

export default CupList