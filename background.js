chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
  });

  const supportedUrls = [
    'https://www.facebook.com/',
    'https://www.instagram.com/',
    'https://www.snapchat.com/',
    'https://www.messenger.com/'
  ];
  
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && supportedUrls.some(url => tab.url.includes(url))) {
      chrome.tabs.sendMessage(tabId, { action: 'sendEmail' });
    }
  });
  