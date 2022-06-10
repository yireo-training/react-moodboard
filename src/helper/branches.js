const fetchRemoteBranches = () => {
  const url = "https://cors-anywhere.herokuapp.com/https://typo3.inspirium.nl/typo3/api/1/pages?type=branches";
  //const url = "https://stoplight.io/mocks/maxserv/inspirium/25385911/pages";

  return fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("HTTP status " + response.status);
    }
    return response.json();
  });
};

export { fetchRemoteBranches };
