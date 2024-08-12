async function fetchProfileData() {
  const url =
    "https://raw.githubusercontent.com/Bruno-Otoni/Formacao-Javascript/main/Modulo%203/Porfolio%20com%20API/Data/profile.json";
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}