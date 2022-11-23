export const urlBase = "https://gateway.marvel.com/v1/public/characters";
const timeZone = "ts=1000";
const limit = "&limit=100";
const apikey = "&apikey=b6847664cfd533605e325588b62af044";
const hash = "&hash=4990c9ec6007b3a745c1bbc20f22b7a3";
export const parametrosComunes = `${timeZone}${limit}${apikey}${hash}`;
export const eventos = "events=321,314,315";

export const apiMarvel = `${urlBase}?${parametrosComunes}&${eventos}`;