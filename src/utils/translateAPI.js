// Translation utility using a translation API
const translateText = async (text, targetLanguage) => {
  try {
    const response = await fetch('https://translation.googleapis.com/language/translate/v2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer YOUR_GOOGLE_API_KEY` // Replace with your API key
      },
      body: JSON.stringify({
        q: text,
        target: targetLanguage, // 'ta' for Tamil, 'en' for English
        source: 'en' // Source language is English
      })
    });

    const data = await response.json();
    return data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    return text; // Return original text if translation fails
  }
};

export default translateText; 