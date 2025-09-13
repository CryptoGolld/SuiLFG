import { useEffect } from 'react'

export function SEO({ title, description, keywords, image, url }) {
  const defaultTitle = "SuiLFG - Decentralized Prediction Markets on Sui"
  const defaultDescription = "SuiLFG is the revolutionary prediction market platform on Sui blockchain with anti-whale governance. Experience fair, transparent prediction markets where your vote can't be bought."
  const defaultKeywords = "SuiLFG, prediction markets, Sui blockchain, DeFi, governance, NFT, anti-whale, decentralized finance"
  const defaultImage = "/suilfg-logo.png"
  const defaultUrl = "https://suilfg.com"

  const seoTitle = title ? `${title} | ${defaultTitle}` : defaultTitle
  const seoDescription = description || defaultDescription
  const seoKeywords = keywords || defaultKeywords
  const seoImage = image || defaultImage
  const seoUrl = url || defaultUrl

  useEffect(() => {
    // Update document title
    document.title = seoTitle
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', seoDescription)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = seoDescription
      document.head.appendChild(meta)
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', seoKeywords)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'keywords'
      meta.content = seoKeywords
      document.head.appendChild(meta)
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', seoTitle)
    } else {
      const meta = document.createElement('meta')
      meta.setAttribute('property', 'og:title')
      meta.content = seoTitle
      document.head.appendChild(meta)
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', seoDescription)
    } else {
      const meta = document.createElement('meta')
      meta.setAttribute('property', 'og:description')
      meta.content = seoDescription
      document.head.appendChild(meta)
    }
    
    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage) {
      ogImage.setAttribute('content', seoImage)
    } else {
      const meta = document.createElement('meta')
      meta.setAttribute('property', 'og:image')
      meta.content = seoImage
      document.head.appendChild(meta)
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) {
      ogUrl.setAttribute('content', seoUrl)
    } else {
      const meta = document.createElement('meta')
      meta.setAttribute('property', 'og:url')
      meta.content = seoUrl
      document.head.appendChild(meta)
    }
    
    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) {
      twitterTitle.setAttribute('content', seoTitle)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'twitter:title'
      meta.content = seoTitle
      document.head.appendChild(meta)
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    if (twitterDescription) {
      twitterDescription.setAttribute('content', seoDescription)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'twitter:description'
      meta.content = seoDescription
      document.head.appendChild(meta)
    }
    
    const twitterImage = document.querySelector('meta[name="twitter:image"]')
    if (twitterImage) {
      twitterImage.setAttribute('content', seoImage)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'twitter:image'
      meta.content = seoImage
      document.head.appendChild(meta)
    }
  }, [seoTitle, seoDescription, seoKeywords, seoImage, seoUrl])

  return null
}
