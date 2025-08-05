
  // Push a dummy state so we can detect back navigation
  history.pushState(null, null, location.href);

  window.onpopstate = function () {
    const stay = confirm("Don't go back, otherwise you will lose your saved question answers!");
    if (stay) {
      // Push state again to reset back button
      history.pushState(null, null, location.href);
    } else {
      // Allow going back
      history.back();
    }
  };