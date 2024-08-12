async function fetchProfileData() {
  const url =
    "https://raw.githubusercontent.com/Bruno-Otoni/Formacao-Javascript/main/Modulo%203/Porfolio%20com%20API/Data/profile.json";
  const fetching = await fetch(url);
  return await fetching.json();
}
