

// In-App Interstitial

show_9379707({
  type: 'inApp',
  inAppSettings: {
    frequency: 2,
    capping: 0.1,
    interval: 30,
    timeout: 5,
    everyPage: false
  }
})

/*
This value is decoded as follows:
- show automatically 2 ads
  within 0.1 hours (6 minutes)
  with a 30-second interval between them
  and a 5-second delay before the first one is shown.
  The last digit, 0, means that the session will be saved when you navigate between pages.
  If you set the last digit as 1, then at any transition between pages,
  the session will be reset, and the ads will start again.
*/







// Rewarded interstitial

show_9379707().then(() => {
    // You need to add your user reward function here, which will be executed after the user watches the ad.
    // For more details, please refer to the detailed instructions.
    alert('You have seen an ad!');
})

        