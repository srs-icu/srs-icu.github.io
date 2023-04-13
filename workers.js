const urls = [
  "https://www.wihhospital.com/en/list-of-srs-and-breast-surgery/",
  "http://www.miladahospital.com/products/view.php?id=104",
  "https://www.kamolhospital.com/zh/service/MTF-sex-reassignment/",
  "https://pai.co.th/srs-penile-skin-inversion/",
  "https://supornclinic.com/calendar/",
  "https://www.bumrungrad.com/en/treatments/gender-affirmation-surgery-for-transwoman",
  "https://www.yanhee.net/cn/sex-reassignment-surgery-thailand/",
  "https://www.mozaiccare.net/gnc-nb-including-penile-preservatio",
  "https://cranects.com/min-jun-do/",
  "https://mexicotransgendercenter.us/service/mtf-sex-reassignment-surgery-srs/"
]

export default {
  async fetch(request, env) {
    const url = urls[Math.floor(Math.random() * urls.length)]
    return Response.redirect(url, 302)
  }
}
