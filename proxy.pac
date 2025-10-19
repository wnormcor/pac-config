function FindProxyForURL(url, host) {
  var proxy = "PROXY 127.0.0.1:1080";

  // Домены, которые нужно гнать через прокси
  var domains = [
    "chatgpt.com",
    "openai.com",
    "api.openai.com",
    "auth.openai.com",
    "oaistatic.com",
    "notion.so",
    "sagernet.org",
    "2ip.ru"
  ];

  // Сопоставляем и точные хосты, и поддомены
  for (var i = 0; i < domains.length; i++) {
    var d = domains[i];

    if (host == d) return proxy;                      // точное совпадение
    if (dnsDomainIs(host, "." + d)) return proxy;     // поддомен
    if (shExpMatch(host, "*." + d)) return proxy;     // wildcard (на всякий)
  }

  return "DIRECT";
}
