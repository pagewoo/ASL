var selected_color = '#FFD27F';
var poly_color = '#F1636F';
var over_color = '#6FADEA';
var over_opacity = .1;
var opacity = .2;
var selected_opacity = .78;
var stroke_opacity = .4;
var over_stroke_opacity = 1;
var selected_stroke_opacity = 1;
var stroke_weight = 1;
var selected_stroke_weight = 1;
var selected_stroke_color = '#444444'
var stroke_color = '#333333'
var over_stroke_color = '#555555'


var premium_demos = [
  {selected:false, name:'Airports', color:'#A275B6', id:'airports', price:15, segments:[1, 2, 3, 4, 5, 6, 7], description:'Airports.'},
  {selected:false, name:'Colleges', color:'#6E84C0', id:'colleges', price:12, segments:[9, 10, 11, 13, 16, 17, 18], description:'Colleges.'},
  {selected:false, name:'High Schools', color:'#6E84C0', id:'schools', price:14, segments:[9, 10, 11, 13, 16, 17, 18], description:'High Schools'},
  {selected:false, name:'Sports Stadiums', color:'#8BBAE4', id:'stadiums', price:17, segments:[20, 22, 45, 51, 54, 62], description:'Sports Stadiums.'},
  {selected:false, name:'Music Venues', color:'#6DCDE3', id:'venues', price:17, segments:[8, 23, 27, 36, 39], description:'Music Venues.'},
  {selected:false, name:'Amusement Parks', color:'#84B281', id:'amusement', price:19, segments:[14, 15, 29, 30, 43, 49, 50, 57, 65], description:'Amusement Parks'},

];


// var life_modes = [
//   {selected:false, name:'High Society', color:'#A275B6', id:'Affulent', segments:[1, 2, 3, 4, 5, 6, 7], description:'Residents of the seven High Society neighborhoods are affluent and well educated. They represent slightly more than 12 percent of all US households but generate nearly one-quarter of the total US income. Employment in high paying positions, such as professional or managerial occupations, is a primary reason why the median household income for this group is $100,983. Most households are married couple families who live in affluent neighborhoods where the median home value is $320,065. Although this is one of the least ethnically diverse groups in the United States, it is one of the fastest growing, increasing by more than 2 percent annually since 2000. Residents of High Society are affluent and active—financially, civically, and physically. They participate in a wide variety of public activities and sports and travel extensively. Try the Internet or radio instead of television to reach these markets.'},
//   {selected:false, name:'Upscale Avenues', color:'#6E84C0', id:'II', segments:[9, 10, 11, 13, 16, 17, 18], description:'Prosperity is the overriding attribute shared by the seven segments in Upscale Avenues. Residents have earned their success from years of hard work. Similar to the High Society segments, many in this group are also well educated with above-average earnings. However, their housing choices reveal their distinct preferences. Urban markets such as Urban Chic and Paciﬁc Heights favor townhouses and high-rises, Pleasant-Ville residents prefer single-family homes in suburban neighborhoods, and Green Acres residents opt for open spaces. Some have not settled on a home yet, such as the renters among Enterprising Professionals; others, such as Cozy and Comfortable residents, have been settled for years. The median household income for the group is $69,770, and their median net worth is $182,330. Prosperous domesticity also characterizes the lifestyle in Upscale Avenues. They invest in their homes; the owners work on landscaping and home remodeling projects, and the renters buy new furnishings and appliances. They play golf, lift weights, go bicycling, and take domestic vacations. Although they are partial to new cars, they also save and invest their earnings.'},
//   {selected:false, name:'Metropolis', color:'#8BBAE4', id:'III', segments:[20, 22, 45, 51, 54, 62], description:'Residents in the six segments of the Metropolis group live and work in America’s cities. They live in older, single family homes or row houses built in the 1940s or earlier. Those living in larger cities tend to own fewer vehicles and rely more on public transportation; however, workers in most of the Metropolis segments commute to servicerelated jobs. The median value of their homes is $139,511. The Metropolis group reﬂects the segments’ diversity in housing, age, and income. For example, ages among the segments range from Generation Xers to retirees; households include married couples with children and single parents with children. Employment status also varies from well-educated professionals to unemployed. The median household income of the group is $43,234. Their lifestyle is also uniquely urban and media oriented. They like music, especially urban and contemporary formats, which they listen to during their commutes. They watch a variety of TV programs, from news to syndicated sitcoms, and would rather see movies than read books.'},
//   {selected:false, name:'Solo Acts', color:'#83d1ff', id:'IV', segments:[8, 23, 27, 36, 39], description:'Residents of the Solo Acts summary group segments are singles who prefer city life. Many are young, just starting out in more densely populated US neighborhoods; others are well-established singles who have no home ownership or child-rearing responsibilities. Second only to High Society, residents of this group tend to be well-educated, working professionals who are either attending college or already hold a degree. Their incomes reﬂect their employment experience, ranging from a low median of $44,601 (Old and Newcomers) among the newest households to approximately $93,899 (Laptops & Lattes) among established singles. Home ownership is at 28 percent; the median home value is $236,054. Contrary to modern migration patterns that ﬂow away from the largest cities, Solo Acts’ residents are moving into major cities such as New York City; Chicago; Washington, D.C.; Boston; Los Angeles; and San Francisco. With considerable discretionary income and few commitments, their lifestyle is urban, including the best of city life—dining out, attending plays and concerts, and visiting museums—and, for a break from constant connectivity, extensive travel domestically and abroad.'},
//   {selected:false, name:'Senior Styles', color:'#84B281', id:'V', segments:[14, 15, 29, 30, 43, 49, 50, 57, 65], description:'More than 14.4 million households in the nine Senior Styles segments comprise one of the largest LifeMode summary groups. As the US population ages, two of the fastest-growing American markets are found among The Elders and the Silver and Gold segments. Senior Styles segments illustrate the diversity among today’s senior markets. Although incomes within this group cover a wide range, the median is $45,261, attributable mostly to retirement income or Social Security payments. Younger, more affluent seniors, freed of their childrearing responsibilities, are traveling and relocating to warmer climates. Settled seniors are looking forward to retirement and remaining in their homes. Residents in some of the older, less privileged segments live alone and collect Social Security and other beneﬁts. Their choice of housing depends on their income. This group may reside in single-family homes, retirement homes, or high-rises. Their lifestyles can be as diverse as their circumstances, but senior markets do have common traits among their preferences. Golf is their favorite sport; they play and watch golf on TV. They read the newspaper daily and prefer to watch news shows on television. Although their use of the Internet is nearly average, they are more likely to shop through QVC than online.'},

//   {selected:false, name:'Scholars and Patriots', color:'#C7DE90', id:'VI', segments:[40, 55, 63], description:'This summary group is unique in the Tapestry Segmentation system. Their shared traits include youth, with the ttendant lower incomes, and atypical environments such as college life or military service. Because of their transient lifestyle and lifestage, their home ownership rate is low. Most live in townhouses or apartments, although one-quarter reside in single-family homes. One segment, Military Proximity, is dominated by military life; the other two, College Towns and Dorms and Diplomas, are predominantly students who are pursuing college degrees. Although most of the residents in the military segment are either on active duty or employed in civilian jobs on military bases, the students tend to work part-time at low-paying jobs to support themselves while attending school. However, low personal income does not inhibit their lifestyles. Scholars and Patriots residents’ eclectic tastes in sports range from yoga to football. Electronically savvy, they have wireless nternet connections, notebook computers, iPods, and digital cameras.'},
//   {selected:false, name:'High Hopes', color:'#FAE68D', id:'VII', segments:[28, 48], description:'The High Hopes summary group includes Aspiring Young Families and Great Expectations. These residents are a mix of married couples, single parents, and singles who seek the “American Dream” of home ownership and a rewarding job. Most live in single-family houses or multiunit buildings; approximately half own their homes. The median home value is $119,508. Many would move to a new location for better opportunities. Many are young, mobile, and college educated; one-third are younger than 35 years. The median household income is $47,263, and the median net worth is $29,218.'},
//   {selected:false, name:'Global Roots', color:'#FCCC77', id:'VIII', segments:[35, 38, 44, 47, 52, 58, 60, 61], description:'Ethnic diversity is the common thread among the eight segments in Global Roots; the diversity index stands at 89. Las Casas and NeWest Residents represent a strong Hispanic inﬂuence in addition to a broad mix of cultural and racial diversity found in Urban Melting Pot and International Marketplace. Typical of new households, Global Roots’ residents are young, earn modest incomes, and tend to rent in multiunit buildings. Their youth reﬂects recent immigration trends; half of all households have immigrated to the United States within the past 10 years. Married couples, usually with children; single parents; and people who live alone are typical of the household types in the Global Roots segments. Because households with children dominate, it is not surprising that spending is high for baby products, children’s clothing, and toys. Residents of Global Roots are less likely than other groups to have home PCs but just as likely to use cell phones. They maintain ties with friends and relatives in their countries of origin with foreign travel.'},
//   {selected:false, name:'Family Portrait', color:'#C59571', id:'IX', segments:[12, 19, 21, 59, 64], description:'Family Portrait has the fastest-growing population of the LifeMode summary groups, driven primarily by the rapid increase in the Up and Coming Families segment. Youth, family life, and the presence of children are the common characteristics across the five markets in Family Portrait. The group is also ethnically diverse: more than 30 percent of the residents are of Hispanic descent. The neighborhoods are predominantly composed of homeowners who live in single-family homes. Most households include married couples with children who contribute to the group’s large household size, averaging more than 3.1 persons per household. Their lifestyle reflects their youth and family orientation—buying infant and children’s clothing and toys and visiting theme parks and zoos.'},
//   {selected:false, name:'Traditional Living', color:'#FEDCC3', id:'X', segments:[24, 32, 33, 34], description:'The four segments in Traditional Living convey the perception of real middle America—hardworking, settled families. The group’s higher median age of 38.2 years also conveys their lifestage—a number of older residents who are completing their child-rearing responsibilities and anticipating retirement. Even though they’re older, many still work hard to earn a modest living. They typically own single-family homes in established, slow-growing neighborhoods. They buy standard, four-door American cars, belong to veterans’ clubs and fraternal organizations, take care of their homes and gardens, and rely on traditional media such as newspapers for their news.'},

//   {selected:false, name:'Factories and Farms', color:'#F8ABBD', id:'XI', segments:[25, 37, 42, 53, 56], description:'The segments in the Factories and Farms summary group represent rural life—from small towns and villages to farms. Employment in manufacturing and agricultural industries is typical in these small, settled communities across America’s breadbasket. Population change is nominal, and the profile is classic. Most households are families, either married couples or married couples with children. By age, the residents of Factories and Farms mirror the US distribution, with slightly more retirees. Median household income is a bit lower, almost $40,611, but so is the home value of $91,798. Most own their homes. Their lifestyle reflects their locale, emphasizing home and garden care, fishing and hunting, pets, and membership in local clubs.'},
//   {selected:false, name:'American Quilt', color:'#F78078', id:'XII', segments:[26, 31, 41, 46], description:'Location in America’s small towns and rural areas links the four segments in American Quilt. Unlike Factories and Farms, this group represents a more diverse microcosm of small-town life, including the largest segment of Tapestry Segmentation, Midland Crowd. Manufacturing and agriculture remain part of the local economy, but American Quilt also includes workers in local government, service, construction, communication, and utilities. In addition to farmers, American Quilt includes the Rural Resort Dwellers segment, an older population that is retiring to seasonal vacation spots, and Crossroads, young families who live in mobile homes. Households in American Quilt are also more affluent, with a median household income of $45,501, and more are homeowners. However, the rural lifestyle is also evident, with a preference for fishing, hunting, power boats, pickups, and country music.'},

// ];

var life_modes = [

  {selected:false, name:'Upper Class', img:'img/upperclass.png', color:'#2bbaf8', id:'Affulent', segments:[1, 2, 3, 4, 5, 6, 7], description:'Residents of the seven High Society neighborhoods are affluent and well educated. They represent slightly more than 12 percent of all US households but generate nearly one-quarter of the total US income. Employment in high paying positions, such as professional or managerial occupations, is a primary reason why the median household income for this group is $100,983. Most households are married couple families who live in affluent neighborhoods where the median home value is $320,065. Although this is one of the least ethnically diverse groups in the United States, it is one of the fastest growing, increasing by more than 2 percent annually since 2000. Residents of High Society are affluent and active—financially, civically, and physically. They participate in a wide variety of public activities and sports and travel extensively. Try the Internet or radio instead of television to reach these markets.'},
  {selected:false, name:'Suburbia', img:'img/singles.png', color:'#51bbc5', id:'II', segments:[9, 10, 11, 13, 16, 17, 18], description:'Prosperity is the overriding attribute shared by the seven segments in Upscale Avenues. Residents have earned their success from years of hard work. Similar to the High Society segments, many in this group are also well educated with above-average earnings. However, their housing choices reveal their distinct preferences. Urban markets such as Urban Chic and Paciﬁc Heights favor townhouses and high-rises, Pleasant-Ville residents prefer single-family homes in suburban neighborhoods, and Green Acres residents opt for open spaces. Some have not settled on a home yet, such as the renters among Enterprising Professionals; others, such as Cozy and Comfortable residents, have been settled for years. The median household income for the group is $69,770, and their median net worth is $182,330. Prosperous domesticity also characterizes the lifestyle in Upscale Avenues. They invest in their homes; the owners work on landscaping and home remodeling projects, and the renters buy new furnishings and appliances. They play golf, lift weights, go bicycling, and take domestic vacations. Although they are partial to new cars, they also save and invest their earnings.'},
  {selected:false, name:'Metropolitans', img:'img/metropolitan.png', color:'#ffcb04', id:'III', segments:[20, 22, 45, 51, 54, 62], description:'Residents in the six segments of the Metropolis group live and work in America’s cities. They live in older, single family homes or row houses built in the 1940s or earlier. Those living in larger cities tend to own fewer vehicles and rely more on public transportation; however, workers in most of the Metropolis segments commute to servicerelated jobs. The median value of their homes is $139,511. The Metropolis group reﬂects the segments’ diversity in housing, age, and income. For example, ages among the segments range from Generation Xers to retirees; households include married couples with children and single parents with children. Employment status also varies from well-educated professionals to unemployed. The median household income of the group is $43,234. Their lifestyle is also uniquely urban and media oriented. They like music, especially urban and contemporary formats, which they listen to during their commutes. They watch a variety of TV programs, from news to syndicated sitcoms, and would rather see movies than read books.'},
  {selected:false, name:'Trendsetters', img:'img/trendsetters.png', color:'#2682d6', id:'IV', segments:[8, 23, 27, 36, 39], description:'Residents of the Solo Acts summary group segments are singles who prefer city life. Many are young, just starting out in more densely populated US neighborhoods; others are well-established singles who have no home ownership or child-rearing responsibilities. Second only to High Society, residents of this group tend to be well-educated, working professionals who are either attending college or already hold a degree. Their incomes reﬂect their employment experience, ranging from a low median of $44,601 (Old and Newcomers) among the newest households to approximately $93,899 (Laptops & Lattes) among established singles. Home ownership is at 28 percent; the median home value is $236,054. Contrary to modern migration patterns that ﬂow away from the largest cities, Solo Acts’ residents are moving into major cities such as New York City; Chicago; Washington, D.C.; Boston; Los Angeles; and San Francisco. With considerable discretionary income and few commitments, their lifestyle is urban, including the best of city life—dining out, attending plays and concerts, and visiting museums—and, for a break from constant connectivity, extensive travel domestically and abroad.'},
  {selected:false, name:'Retirees', img:'img/retirees.png', color:'#f7931e', id:'V', segments:[14, 15, 29, 30, 43, 49, 50, 57, 65], description:'More than 14.4 million households in the nine Senior Styles segments comprise one of the largest LifeMode summary groups. As the US population ages, two of the fastest-growing American markets are found among The Elders and the Silver and Gold segments. Senior Styles segments illustrate the diversity among today’s senior markets. Although incomes within this group cover a wide range, the median is $45,261, attributable mostly to retirement income or Social Security payments. Younger, more affluent seniors, freed of their childrearing responsibilities, are traveling and relocating to warmer climates. Settled seniors are looking forward to retirement and remaining in their homes. Residents in some of the older, less privileged segments live alone and collect Social Security and other beneﬁts. Their choice of housing depends on their income. This group may reside in single-family homes, retirement homes, or high-rises. Their lifestyles can be as diverse as their circumstances, but senior markets do have common traits among their preferences. Golf is their favorite sport; they play and watch golf on TV. They read the newspaper daily and prefer to watch news shows on television. Although their use of the Internet is nearly average, they are more likely to shop through QVC than online.'},
  {selected:false, name:'College Kids', img:'img/colleges.png', color:'#485e88', id:'VI', segments:[40, 55, 63], description:'This summary group is unique in the Tapestry Segmentation system. Their shared traits include youth, with the ttendant lower incomes, and atypical environments such as college life or military service. Because of their transient lifestyle and lifestage, their home ownership rate is low. Most live in townhouses or apartments, although one-quarter reside in single-family homes. One segment, Military Proximity, is dominated by military life; the other two, College Towns and Dorms and Diplomas, are predominantly students who are pursuing college degrees. Although most of the residents in the military segment are either on active duty or employed in civilian jobs on military bases, the students tend to work part-time at low-paying jobs to support themselves while attending school. However, low personal income does not inhibit their lifestyles. Scholars and Patriots residents’ eclectic tastes in sports range from yoga to football. Electronically savvy, they have wireless nternet connections, notebook computers, iPods, and digital cameras.'},
  {selected:false, name:'American Dreams', img:'img/up_coming.png', color:'#e93681', id:'VII', segments:[28, 48], description:'The High Hopes summary group includes Aspiring Young Families and Great Expectations. These residents are a mix of married couples, single parents, and singles who seek the “American Dream” of home ownership and a rewarding job. Most live in single-family houses or multiunit buildings; approximately half own their homes. The median home value is $119,508. Many would move to a new location for better opportunities. Many are young, mobile, and college educated; one-third are younger than 35 years. The median household income is $47,263, and the median net worth is $29,218.'},
  {selected:false, name:'Multicultural', img:'img/multicultural.png', color:'#e03b45', id:'VIII', segments:[35, 38, 44, 47, 52, 58, 60, 61], description:'Ethnic diversity is the common thread among the eight segments in Global Roots; the diversity index stands at 89. Las Casas and NeWest Residents represent a strong Hispanic inﬂuence in addition to a broad mix of cultural and racial diversity found in Urban Melting Pot and International Marketplace. Typical of new households, Global Roots’ residents are young, earn modest incomes, and tend to rent in multiunit buildings. Their youth reﬂects recent immigration trends; half of all households have immigrated to the United States within the past 10 years. Married couples, usually with children; single parents; and people who live alone are typical of the household types in the Global Roots segments. Because households with children dominate, it is not surprising that spending is high for baby products, children’s clothing, and toys. Residents of Global Roots are less likely than other groups to have home PCs but just as likely to use cell phones. They maintain ties with friends and relatives in their countries of origin with foreign travel.'},
  {selected:false, name:'Up and Coming', img:'img/suburbia.png', color:'#8786d5', id:'IX', segments:[12, 19, 21, 59, 64], description:'Family Portrait has the fastest-growing population of the LifeMode summary groups, driven primarily by the rapid increase in the Up and Coming Families segment. Youth, family life, and the presence of children are the common characteristics across the five markets in Family Portrait. The group is also ethnically diverse: more than 30 percent of the residents are of Hispanic descent. The neighborhoods are predominantly composed of homeowners who live in single-family homes. Most households include married couples with children who contribute to the group’s large household size, averaging more than 3.1 persons per household. Their lifestyle reflects their youth and family orientation—buying infant and children’s clothing and toys and visiting theme parks and zoos.'},
  {selected:false, name:'Empty Nesters', img:'img/empty_nesters.png', color:'#ff6947', id:'X', segments:[24, 32, 33, 34], description:'The four segments in Traditional Living convey the perception of real middle America—hardworking, settled families. The group’s higher median age of 38.2 years also conveys their lifestage—a number of older residents who are completing their child-rearing responsibilities and anticipating retirement. Even though they’re older, many still work hard to earn a modest living. They typically own single-family homes in established, slow-growing neighborhoods. They buy standard, four-door American cars, belong to veterans’ clubs and fraternal organizations, take care of their homes and gardens, and rely on traditional media such as newspapers for their news.'},
  {selected:false, name:'Town Folk', img:'img/small_towns.png', color:'#2da383', id:'XI', segments:[25, 37, 42, 53, 56], description:'The segments in the Factories and Farms summary group represent rural life—from small towns and villages to farms. Employment in manufacturing and agricultural industries is typical in these small, settled communities across America’s breadbasket. Population change is nominal, and the profile is classic. Most households are families, either married couples or married couples with children. By age, the residents of Factories and Farms mirror the US distribution, with slightly more retirees. Median household income is a bit lower, almost $40,611, but so is the home value of $91,798. Most own their homes. Their lifestyle reflects their locale, emphasizing home and garden care, fishing and hunting, pets, and membership in local clubs.'},
  {selected:false, name:'Lower Income', img:'img/lower_income.png', color:'#75e4b3', id:'XII', segments:[26, 31, 41, 46], description:'Location in America’s small towns and rural areas links the four segments in American Quilt. Unlike Factories and Farms, this group represents a more diverse microcosm of small-town life, including the largest segment of Tapestry Segmentation, Midland Crowd. Manufacturing and agriculture remain part of the local economy, but American Quilt also includes workers in local government, service, construction, communication, and utilities. In addition to farmers, American Quilt includes the Rural Resort Dwellers segment, an older population that is retiring to seasonal vacation spots, and Crossroads, young families who live in mobile homes. Households in American Quilt are also more affluent, with a median household income of $45,501, and more are homeowners. However, the rural lifestyle is also evident, with a preference for fishing, hunting, power boats, pickups, and country music.'},
  {selected:false, name:'Special Zone', img:'img/trendsetters.png', color:'#93af89', id:'Special', segments:[66], description:'Residents of the seven High Society neighborhoods are affluent and well educated. They represent slightly more than 12 percent of all US households but generate nearly one-quarter of the total US income. Employment in high paying positions, such as professional or managerial occupations, is a primary reason why the median household income for this group is $100,983. Most households are married couple families who live in affluent neighborhoods where the median home value is $320,065. Although this is one of the least ethnically diverse groups in the United States, it is one of the fastest growing, increasing by more than 2 percent annually since 2000. Residents of High Society are affluent and active—financially, civically, and physically. They participate in a wide variety of public activities and sports and travel extensively. Try the Internet or radio instead of television to reach these markets.'},

];

var segments = [

    {selected:false, name:"Top Rung", id:1, demographic: "Residents of Top Rung neighborhoods are mature, married, highly educated, and wealthy. The median age is 44.6 years; one-third of the residents are in their peak earning years of 45–64. More than 77 percent of these households are composed of married couples; half of them have children, and half do not. Except for the presence of children, this is a low-diversity, monochromatic market.", socioeconomic:"Top Rung, the wealthiest consumer market, represents less than 1 percent of all US households. The median household income of $168,876 is more than three-and- one-half times that of the US median. Their wealth comes from investments; income from interest, dividends, and rental properties; and remuneration from positions in management, professions, and sales, particularly in the finance, education, legal, and health care industry sectors. The proportion of households receiving self-employment income is twice that of the national level. The population is highly educated: more than 70 percent of residents aged 25 years and older hold a bachelor's or graduate degree.", residential:"The enclaves of the wealthy are dotted throughout major US cities, with higher concentrations located on the east and west coasts. Top Rung residents own at least one single-family home. Travel is part of their lives including the highest rate of interstate commuting.", preferences:"Top Rung residents can afford to indulge any choice. In addition to obvious investments such as stocks, money market accounts and funds, mutual funds, and annuities, residents hold life insurance policies valued at more than $500,000. They travel frequently, always in style, to domestic and foreign destinations. Residents hire professional cleaning and lawn services to maintain their homes and property and contract for home improvement and remodeling projects. This is the top market for owning or leasing a luxury car. Residents favor new imported vehicles, especially convertibles. A vehicle navigation system is a key feature. Top Rung residents are shoppers. They buy the “best of the best” at high-end department stores, in warehouse/club stores, and from catalogs. They also shop online for books and concert and sports event tickets. Residents spend approximately $1,500 to $2,000 for their home PCs, upgrading frequently to the latest and best technology. They need laptop computers and cell phones to network and keep up with their busy lives. They own three or more cell phones and generally have two phone lines in their homes. Top Rung residents are avid readers of newspapers (usually two or more daily), magazines (especially airline, epicurean, business, finance, and fashion), and books (particularly history and biographies). They listen to classical music, jazz, all-news, public, sports, all-talk, and news/talk radio. They watch news shows on CNBC, CNN, and MSNBC and subscribe to HBO or Showtime. They go to the theater and dance performances, visit museums, and play board games. Active in their communities, they join charitable organizations and environmental groups, work for political parties or candidates, write to elected officials, and contribute to PBS. Health conscious, they practice yoga, do aerobics, play golf and tennis, ski, ice skate, take vitamins, and buy low-fat food. They also watch tennis, golf, and skiing on TV."},
    {selected:false, name:"Suburban Splendor", id:2, demographic:"Suburban Splendor residents are families who live in growing suburban neighborhoods. Married couple families with and without children comprise 8 in 10 of these households. Household growth in these suburbs is 2 percent annually. The median age is 43.1 years, and half of the population is aged 35–64 years. These low-diversity neighborhoods are predominantly white.", socioeconomic:"These successful suburbanites are the epitome of upward mobility, just a couple of rungs below Top Rung in affluence. Suburban Splendor residents have a median household income of $115,396. Labor force participation rates are high for both men and women; many households are two income. Most employed residents work in management, professional positions, and sales. They supplement their salaries with income from interest, dividends, and rental property at a rate much higher than the national level. Well educated, more than half the population aged 25 years and older hold a bachelor's or graduate degree.", residential:"Located in metropolitan areas throughout the United States, Suburban Splendor neighborhoods have a home ownership rate of 92 percent. Located in growing neighborhoods, 60 percent of the houses are relatively new, built after 1979. Because two-income households commonly require multiple vehicles, it is not surprising that 85 percent of these households own two or more vehicles.", preferences:"Hot tubs, espresso machines, granite countertops, and the latest interior design amenities are featured in Suburban Splendor homes. A main focus is home improvement and remodeling projects done mostly by contractors, although residents will tackle interior painting jobs. They own a wide array of electric tools that they may or may not use regularly. Residents hire a lawn maintenance service to cut the grass but like to plant their own shrubs and trees; treat their lawn with fertilizer, weed control, or insecticide; and sow grass seed. They have all the latest electronic gadgets including digital camcorders, video game systems, projection screen TVs, and numerous cell phones. This market prefers to own or lease a minivan or full-size SUV and is one of the top markets for owning or leasing a luxury car. They devote free time to family; travel; and self-improvement pursuits such as physical fitness, reading, visiting museums, and attending the theater. They keep fit by working out weekly at a club or exercising on a treadmill or stationary bike at home in addition to skiing, ice skating, playing tennis and golf, and bicycling. They read the newspaper, books, and magazines (particularly epicurean, airline, travel, business, finance, and boating). Because they travel extensively in the United States and overseas for business and pleasure, they rack up the miles in frequent flyer programs. A favorite hobby is furniture refinishing. When listening to the radio, they prefer classical music as well as all-news, all-talk, news/talk, and sports programs. Suburban Splendor residents are members of business clubs and are active investors, using the Internet to track and trade their stocks, bonds, and funds. They hold home equity credit lines, consult with financial planners, use stock rating services, and own life insurance policies valued at approximately $500,000. They shop at upscale retailers, home stores, and wholesalers. They order items over the phone and shop online for airline tickets, flowers, and computer equipment."},
    {selected:false, name:"Connoisseurs", id:3, demographic:"Residents of Connoisseurs neighborhoods are somewhat older, with a median age of 47.2 years. Approximately 70 percent of the population is married. Although residents appear closer to retirement than child-rearing age, 30 percent of the households are married couples with children living at home. Ethnic diversity is negligible.", socioeconomic:"Connoisseurs are second in affluence only to the Top Rung segment. This market is well educated; 64 percent of the population aged 25 years and older hold a bachelor's or graduate degree. Employed residents earn wages from high-paying management, professional, and sales jobs. Many are self-employed; the rate is twice that of the national average. They have a median household income of $115,893 and supplement their salaries with income from interest, dividends, and rental properties.", residential:"Connoisseurs neighborhoods are usually slow-growing, established, affluent areas in densely populated city centers. Most of their homes are single-family structures built before 1970; 87 percent own their homes. Commuting is a way of life; compared to the US average, more Connoisseurs residents live in a different state from where they work.", preferences:"Connoisseurs residents may be second to Top Rung in wealth, but they are tops for conspicuous consumption. Their homes include the latest upgrades. Not do-it-yourselfers, residents hire contractors for home improvement and remodeling projects, lawncare, landscaping services for property upkeep, and professional housecleaning services. Households have burglar alarms for home security, and residents belong to the AAA auto club for vehicle security. They grind their own coffee beans, particularly Starbucks. This is one of the top markets for owning or leasing a luxury car or convertible equipped with a navigational system. Exercise is a priority: they work out weekly at a club or other facility, ski, play golf and tennis, practice yoga, and jog. They also buy the latest sports attire to look good while exercising. They travel abroad and in the United States, go to museums, and attend theater and dance performances. They go online to make travel plans, track and trade their investments, and shop. They order from high-end catalogs and shop in person at service-oriented department stores. Connoisseurs residents are well read. They read history books; mysteries; biographies; two or more daily newspapers; and epicurean, travel, finance, and business magazines. Residents listen to classical music as well as public, all-news, news/talk, and all-talk radio. Active in their communities, they work for political candidates or parties, write or visit elected officials, and participate in local civic issues. Connoisseurs eat out several times a week, but, for fun, will cook at home occasionally."},
    {selected:false, name:"Boomburbs", id:4, demographic:"The newest additions to the suburbs, these communities are home to busy, affluent young families. Both the neighborhoods and the families are growing. Boomburbs is the fastest-growing market in the United States; the population has been growing at a rate of 4.51 percent annually since 2000. It is also home to one of the highest concentrations of young families with children. The median age is 36.1 years; one-fifth of Boomburbs residents are between 35 and 44 years of age. There is little ethnic diversity in the population; most of the residents are white.", socioeconomic:"The Boomburbs market includes one of the highest concentrations of two-income households. Residents are well educated: more than 50 percent of the population aged 25 years and older hold a bachelor's or graduate degree. They work primarily in management, professional, and sales occupations. The median household income is $104,395, more than double that of the US median. More than half of these households receive additional income from interest, dividends, and rental property.", residential:"The newest developments in growing areas, Boomburbs neighborhoods are concentrated in the South, West, and Midwest; the highest state concentrations are found in Texas and California. Approximately three-quarters of the housing units in Boomburbs neighborhoods were built after 1989; most are single-family houses. These are the newest developments in growing areas. The home ownership rate is 87 percent, compared to 64 percent for the United States. Commuting links these dual-career households with their suburban lifestyle. Many work outside their resident county; 35 percent cross county lines to work (compared to 23 percent for the United States).", preferences:"Residents' product preferences reflect their suburban lifestyle. Boomburbs is the top segment for buying household furnishings, toys and games, men's business and casual clothes, big-screen TVs, cars, and trees. This is also the top market to own big-screen TVs, DVD players, digital camcorders, video game systems, and scanners as well as owning or leasing full-size SUVs. Residents own laptop computers, all kinds of software, and two or more cell phones. They are well-insured, holding life insurance policies worth $500,000 or more. They go online frequently to buy flowers and tickets to sports events, trade and track their investments, do their banking, and make travel plans. Personal computer use by children younger than 18 years is the highest of all the Tapestry segments. Boomburbs residents prefer homes with fireplaces and hot tubs. They tend to employ professional household cleaning services. They will do home improvement projects themselves or hire a contractor for more complicated work. For property maintenance, they hire lawn care and landscaping services, but will also do some lawn care themselves. Family vacations are a top priority; trips to Disney World, Sea World, and other theme parks are popular destinations. For exercise, they play tennis and golf, ski, lift weights, and jog. They watch family videos on DVD, attend baseball and basketball games, and go to golf tourselected:false, naments. They will readily spend more than $250 a year on high-end sports equipment and buy family DVDs for their collections. Favorite types of radio programs include alternative, soft contemporary, sports, and all-talk. They read parenting, finance, and business magazines and watch newer sitcoms and dramas on TV."},
    {selected:false, name:"Wealthy Seaboard Suburbs", id:5, demographic:"Wealthy Seaboard Suburbs are older, established, affluent neighborhoods characteristic of US coastal metropolitan areas. Two-thirds of the population aged 15+ years is married; more than half of the married couples have no children. The median age is 42.9 years. Ethnic diversity is low; most residents are white.", socioeconomic:"Wealthy Seaboard Suburbs neighborhoods are affluent; the median household income is $98,031. Income is derived from a variety of sources; approximately 60 percent of the households receive supplemental income from interest, dividends, and rental properties; 23 percent collect retirement income. More than half of those who work hold professional or management positions.", residential:"Wealthy Seaboard Suburbs neighborhoods are located primarily along the California, New York, New Jersey, and New England coasts. Three-fourths of the housing units were built before 1970. Single-family structures comprise 87.9 percent of the households. Slow to change, Wealthy Seaboard Suburbs homeowners are the least likely to have moved in the last five years. This segment ranks in the top five for residents who commute out of state to work.", preferences:"Not do-it-youselfers, these residents hire lawn and maintenance services to care for their property and contractors to remodel their homes. The top market for remodeling expenditures, this segment spends more than $5,000 a year on home improvements. A typical resident holds a home equity line of credit, holds life insurance policies worth $500,000 or more, uses a brokerage firm, owns stocks, and donates to charities or nonprofits. They love to shop, especially at Macy's, Nordstrom, and warehouse stores. They also shop online and by phone from high-end catalogs. They drink coffee at home and on the road. They shop for milk and coffee at convenience stores, grind their own coffee beans, and visit coffee houses as well as Dunkin' Donuts and Starbucks. Wealthy Seaboard Suburbs residents take nice vacations such as all-inclusive international packages, cruises, and beach trips in the United States or abroad. They also go to Las Vegas and Atlantic City. They go saltwater fishing, skiing, and ice skating and attend the theater. They read two or more daily newspapers; biographies; and epicurean, travel, business, and finance magazines. They listen to classical music, jazz, all-news, and sports radio programs. Cable movie channels are favorites, but residents will watch one or two drama series shows each week. This is a top segment for watching home shopping channels."},
    {selected:false, name:"Sophisticated Squires", id:6, demographic:"Residents of Sophisticated Squires neighborhoods enjoy cultured country life on the urban fringe. These city escapees accept longer commutes to live near fewer neighbors. Mostly married couple families; more than 40 percent of the households are married couples with children that range from toddlers to young adults. The median age is 39.7 years. Most are Baby Boomers and are aged between 35 and 54 years. This segment is not ethnically diverse; most residents are white.", socioeconomic:"These residents are educated; more than one-third of the population aged 25 years or older holds a bachelor's or graduate degree; another third has attended college. Occupations range from management to unskilled labor positions. Most work in white-collar jobs. The median household income is $83,079. Nearly 90 percent of the households earn wage or salary income; nearly half supplement their wages and salaries with interest, dividends, or rental income.", residential:"Sophisticated Squires live in less densely populated areas concentrated along the Atlantic coast and around the Great Lakes. Approximately 90 percent of the housing is single- family homes. Seventy-four percent of the housing was built before 1990; 55 percent was built between 1970 and 1989. More than 80 percent of the households own at least two vehicles. They prefer compact SUVs; however, many drive minivans or full-size SUVs.", preferences:"Do-it-yourselfers, Sophisticated Squires residents take care of their lawns and landscaping; home improvements; and remodeling projects such as bathroom remodeling, installing new light fixtures, painting home interiors, staining decks, and cleaning carpets with their steam cleaners. They like to barbecue on their gas grills and make bread with their bread-making machines. Many households own a motorcycle. A typical household will own three or more cell phones. Looking toward the future, many residents own stocks, bonds, and large life insurance policies. When dieting, they go on Weight Watchers; many own a treadmill or stationary bike to stay fit. They go power boating, play board and word games, do woodworking projects, and attend football and baseball games. Adults also take photos, play golf, and ride their motorcycles. Children play games on the home personal computer and typically own a video game system. Residents listen to soft adult contemporary music; classic hits; news; all-talk; and sports radio, including broadcasts of professional games. Although many households have four or more TVs, residents watch as much television as typical US households. Favorite programs include news, comedies, dramas, and programs on HGTV."},
    {selected:false, name:"Exurbanites", id:7, demographic:"Exurbanites residents prefer an affluent lifestyle in open spaces beyond the urban fringe. Although 40 percent are empty nesters, another 32 percent are married couples with children still living at home. Half of the householders are aged between 45 and 64 years. They may be part of the “sandwich generation,” because their median age of 46.2 years places them directly between paying for children's college expenses and caring for elderly parents. To understand this segment, the lifestage is as important as the lifestyle. There is little ethnic diversity; most residents are white.", socioeconomic:"Approximately half work in substantive professional or management positions. These residents are educated; more than 40 percent of the population aged 25 years and older hold a bachelor's or graduate degree; approximately three in four have attended college. The median household income is $82,074. More than 20 percent earn retirement income; another 57 percent receive additional income from investments.", residential:"Although Exurbanites neighborhoods are growing by 1.61 percent annually, they are not the newest areas. Recent construction comprises only 22 percent of the housing. Seventy percent of the housing units were built after 1969. Most are single-family homes. Because Exurbanites cannot take advantage of public transportation, nearly 80 percent of the households own at least two vehicles. Their average commute time to work is comparable to the US average.", preferences:"Because of their lifestage, Exurbanites residents focus on financial security. They consult with financial planners; have IRA accounts; own shares in money market funds, mutual funds, and tax-exempt funds; own common stock; and track their investments online. Between long-term care insurance and substantial life insurance policies, they are well insured. Many have home equity lines of credit. To improve their properties, Exurbanites residents work on their homes, lawns, and gardens. They buy lawn and garden care products, shrubs, and plants. Although they will also work on home improvements such as interior and exterior painting, they hire contractors for more complicated projects. To help them complete their projects, they own all kinds of home improvement tools such as saws, sanders, and wallpaper strippers. They are very physically active; they lift weights, practice yoga, and jog to stay fit. They also go boating, hiking, and kayaking; play Frisbee; take photos; and go bird watching. When vacationing in the United States, they hike, downhill ski, play golf, attend live theater, and see the sights. This is the top market for watching college basketball and professional football games. They listen to public and news/talk radio and contribute to PBS. They participate in civic activities, serve on committees of local organizations, address public meetings, and help with fundraising. Many are members of charitable organizations."},
    {selected:false, name:"Laptops and Lattes", id:8, demographic:"With no home ownership or child-rearing responsibilities, residents of Laptops and Lattes neighborhoods enjoy single life in the big city. Most households are singles who live alone or with a roommate. The average household size remains constant at 1.8. Although this segment is slowly increasing, it is maturing and diversifying more quickly. The median age is 37.6 years. Although most of the population is white, Asians represent 10.4 percent of the total population.", socioeconomic:"This segment is affluent; the median household income of $84,612 supports these residents. Laptops and Lattes residents are highly educated. More than 70 percent of residents aged 25 years and older hold a bachelor's or graduate degree; approximately 90 percent have attended college. The percentage enrolled in college or graduate school is more than three times the national level. Two- thirds of the employed residents work in professional or management positions, especially in the scientific, technical, finance, insurance, educational services, health care, and information industry sectors. More than half receive investment income; 19 percent earn self- employment income.", residential:"Laptops and Lattes residents prefer to live in major metropolitan areas such as New York City, Los Angeles, San Francisco, Boston, and Chicago. They are more likely to rent than own their homes; home ownership is at 39 percent. The majority of housing is apartments in multiunit buildings, especially those with 20 or more units. These neighborhoods are older and virtually untouched by urban renewal. Although 38 percent of the housing units were built before 1940, they are not inexpensive. The average gross rent is 85 percent higher than the US level, third highest of the Tapestry segments. Thirty percent do not own a vehicle.", preferences:"Cosmopolitan, connected, and politically liberal, Laptops and Lattes residents rely on their web-enabled cell phones instead of laptops to communicate. After the college segments, this is the top market to own an iPod and laptop or notebook computer. They go online to check e-mail, trade and track investments, review the latest news, arrange travel, and shop on sites such as amazon. com, ebay.com, and barnesandnoble.com. They also order items by phone. These residents travel, especially abroad, and enjoy a variety of vacations, such as backpacking, hiking, and beach trips. They stay at upscale hotels and rent cars when on vacation. A typical resident owns renter's insurance policies and uses dry cleaning services frequently. Laptops and Lattes residents go to the movies, the theater, dance performances, rock concerts, museums, bars, nightclubs, baseball and football games, and professional basketball games. They watch foreign films or movie classics on DVD and news and music channels on cable TV. Saturday Night Live is a favorite program. They eat out frequently and take adult education classes. They shop at Target for essentials and luxuries at high-end department and home stores. Residents exercise regularly at a health club and practice yoga, go downhill skiing, play tennis, jog, and bike. When they listen to the radio, they have a strong preference for classical music and all-news programs. They also listen to public radio and contribute to PBS. They read two or more daily newspapers; a variety of books such as history, biographies, and self-help; and travel, epicurean, airline, fashion, finance, and business magazines. They tend to buy organic and low fat/high fiber food. They eat nutrition/energy bars and take vitamins regularly. They get involved in community activities, write to elected officials, write articles that are published, and participate in environmental groups."},
    {selected:false, name:"Urban Chic", id:9, demographic:"Urban Chic residents are professionals who live a sophisticated, exclusive lifestyle. More than half of these households are married-couple families, similar to the US proportion. Fewer than half of them have children. Unlike the United States, there is a smaller proportion of single parents and a higher proportion of singles and shared households. The median age of 42.7 years is older than the US median of 37 years, while the diversity index of 48 is lower than the US figure of 61.", socioeconomic:"Their median household income is $82,524. They are well-educated; more than half of residents aged 25 years and older hold a bachelor's or graduate degree; 80 percent have attended college. They work in a variety of occupations, especially professional, management, and sales positions in the scientific and technical services, educational services, and health care industry sectors. Twenty percent of these households earn income from self-employment ventures; 55 percent receive additional income from investments.", residential:"Major concentrations of Urban Chic neighborhoods are found in urban areas on the northern and southern California coasts and along the east coast. These neighborhoods parallel the United States for housing type and home ownership. Homes range in age from pre-World War II to post-2000, and types from high-rises to single- family houses. Sixty-three percent of the housing is single- family; 27 percent is apartments in multiunit buildings. The rate of home ownership is 65 percent.", preferences:"Urban Chic residents focus more on their lifestyle than ambience. They travel extensively, visit museums, attend dance performances, shop at upscale stores, and do volunteer work. To stay fit, they downhill ski; go backpacking, hiking, and biking; practice yoga; do aerobics; play tennis; and lift weights. They buy natural or organic food and take a multitude of vitamins and dietary supplements. They drink imported wine and truly appreciate a good cup of coffee. These busy, tech-savvy residents use PCs extensively. This is a top segment to own an Apple computer. They go online to arrange travel; get the latest news; check their investment portfolios; trade stocks; and buy books, clothes, flowers, and tickets to concerts and sports events. They use credit cards, often charging more than $700 a month. They also own shares in stocks, tax-exempt funds, mutual funds, and money market funds. They will occasionally use a financial planner or brokerage firm. Urban Chic is one of Tapestry Segmentation's top segments for radio listening; these residents tune in to classical music, all-talk, and public radio. They are also avid readers of newspapers; books; and general editorial, news and entertainment, business, and home service magazines. They seldom watch TV; however, their favorite channels broadcast news programs and documentaries."},
    {selected:false, name:"Pleasant-Ville", id:10, demographic:"Prosperous domesticity distinguishes the settled lives of Pleasant-Ville residents. Families, especially middle-aged married couples, characterize Pleasant-Ville neighbor- hoods. The average family size is 3.3; nearly 40 percent of the households include children. Thirteen percent of the households have adult children. The median age of 40.5 years is slightly older than the US median of 37.2 years. The diversity index of 60 for the Pleasant-Ville population is slightly below the US figure of 61.", socioeconomic:"Prosperous domesticity distinguishes the settled lives of Pleasant-Ville neighborhoods. Among Tapestry Segmentation's upscale segments, these residents have a median household income of $76,642. Employed residents work in a variety of occupations in diverse industry sectors, similar to the US distributions. Approximately one in five households receives retirement income, a ratio that is expected to increase. Forty-four percent of households earn additional income from interest, dividends, or rental properties.", residential:"Residents of Pleasant-Ville neighborhoods live in single family homes; nearly half were built between 1950 and 1970. Because these neighborhoods are concentrated in the Northeast and California, home values increased dramatically in this decade, but have begun to decline. These settled residents enjoy where they live; two-thirds have lived in the same house since 1995, when they bought their homes for much lower prices. Despite the fluctuation in value, home ownership remains high at 82 percent. To maintain their comfortable lifestyle, 12 percent commute an hour or more to work. Transportation is important; two- thirds maintain two or more vehicles", preferences:"Because older homes require maintenance and renovation, home improvement projects are a priority in Pleasant-Ville neighborhoods. Not do-it-yourselfers, residents hire contractors for remodeling projects; however, they would probably do their own yard work instead of hiring a lawn service. They shop at warehouse stores for value and use coupons for discounts. For more upscale items, they shop at department stores. Those who are union members contract for health insurance through the union. Pleasant-Ville residents spend time with their families, dine out, play cards and board games, attend baseball games, and visit theme parks. They take sightseeing vacations and beach trips in the United States or cruise to foreign ports. They own and use older PCs to shop online for small items, check e-mail, and read the news. These residents listen to contemporary hit, all-news, all- talk, and sports radio, particularly during their commute times. The sports fanatics listen to ball games on the radio and watch a variety of major sports on TV. For exercise, they usually work out on the treadmill at home, walk, and swim. To keep abreast of current events, they would probably read two or more daily newspapers."},
    {selected:false, name:"Pacific Heights", id:11, demographic:"Upscale neighborhoods in Pacific coastal cities best describe Pacific Heights. More than three-fourths of the households include families, primarily married couples with or without children. The average family size for this market is 3.61. Less than 1 percent of US households, this segment has the highest percentages of Asian and Pacific Islander populations. The median age is 39.8 years.", socioeconomic:"At 60.6 percent, labor force participation is slightly below the national average, as is unemployment, at 10.5 percent. Most Pacific Heights households include more than one worker. The median household income is $78,595. Education remains a priority for these first- and second-generation Americans. More than 60 percent of the residents aged 25 years and older have attended college; more than one in three hold a bachelor's or graduate degree. College and graduate school enrollment is slightly higher than the national average. Most households earn income from wages or salaries; 44 percent receive income from investments.", residential:"Pacific Heights households are found in the high-rent districts of California and Hawaii. The home ownership rate is 68 percent. Residents prefer single-family homes or townhomes. Most live in densely populated urban centers near their jobs in homes built before 1980.", preferences:"Pacific Heights residents keep in touch with family living overseas; they call frequently and travel abroad to visit. Residents will usually go to Las Vegas or visit Disneyland during the year. They read mystery books and listen to music on their MP3 players. They also rent foreign films, movies, comedies, and dramas on DVD to watch on their giant-screen TVs. Their favorite TV shows are detective dramas. They read general editorial and entertainment magazines. They listen to contemporary hit, adult contemporary, all-news, or urban radio, usually during their commutes. Baseball is their favorite sport to watch, listen to, and play. To keep their homes looking first-rate, Pacific Heights residents spend for home improvement and remodeling projects. Most households own an imported vehicle, usually a Toyota or Honda that they will drive for several years. They belong to an auto club and rent cars when they travel. They shop regularly at Wal-Mart, Target, JCPenney, and wholesalers for essentials but will also often shop at upscale retailers. These residents are health conscious; they take vitamins and exercise regularly at a health club. When grocery shopping, they buy organic, low-sodium, and low cholesterol products. They eat nutrition bars as a healthy snack."},
    {selected:false, name:"Up and Coming Families", id:12, demographic:"With an annual household growth rate of 4.56 percent, Up and Coming Families represents Tapestry Segmentation's second highest household growth market. A mix of Generation Xers and Baby Boomers with a median age of 32.6 years, this segment is the youngest of Tapestry Segmentation's affluent family markets. Residents of these neighborhoods are young, affluent families with younger children. Eighty percent of the households are families. Most of the residents are white; however, diversity is increasing as the segment grows.", socioeconomic:"Beginning their careers, residents of Up and Coming Families are earning above-average incomes. The median household income is $69,522, higher than the national median. Nearly two-thirds of the residents aged 25 years and older have attended college; more than one in five holds a bachelor's degree. Ninety-one percent of households earn income from wages and salaries. Although half of the households have children, they also have working parents.", residential:"In the suburban outskirts of midsized metropolitan areas with populations higher than 250,000, approximately half of Up and Coming Families neighborhoods are concentrated in the South, the other half in the West and Midwest. Most residents live in new single-family housing; more than half the housing units were built in the last 10 years. Home ownership is at 80 percent.", preferences:"Family and home dictate the products these residents buy. Many are beginning or expanding their families, so baby equipment, children's clothing, and toys are essential purchases. Because many are first-time homeowners, basic household furniture and lawn fertilizer, weed control, and insecticide products are important. Car loans and mort- gage payments are major household budget items. They are most likely to own or lease an SUV or a minivan. They eat out at family restaurants, especially on the weekends, and buy fast food at the drive-through or for takeout. They play softball, take the kids to the zoo, and visit theme parks (generally Sea World or Disney World) where they make good use of their digital camera or camcorder. They rent comedy, family, and action/adventure DVDs. Cable station favorites include Country Music Channel, ESPN news, The Learning Channel, and the Disney Channel. They listen to country, soft rock, and contemporary hit radio."},
    {selected:false, name:"In Style", id:13, demographic:"In Style residents live in the suburbs but prefer the city lifestyle. Professional couples predominate. Household distributions by type are similar to those of the United States. Married-couple families represent 54 percent of households. Households without children (married couples without children, single-person, shared, and other family types), comprise more than two-thirds of all households. This count is increasing. The population is slightly older, with a median age of 40.5 years. There is little diversity in these neighborhoods.", socioeconomic:"In Style residents live in the suburbs but prefer the city lifestyle. Professional couples predominate. Household distributions by type are similar to those of the United States. Married-couple families represent 54 percent of households. Households without children (married couples without children, single-person, shared, and other family types), comprise more than two-thirds of all households. This count is increasing. The population is slightly older, with a median age of 40.5 years. There is little diversity in these neighborhoods.", residential:"In Style residents live in affluent neighborhoods of metropolitan areas across the country. More suburban than urban, they embrace an urbane lifestyle; 14 percent prefer townhouses to traditional single-family homes chosen by 56 percent of the households. The 69 percent rate of home ownership is just slightly above average. More than three-quarters of the housing was built in the last 30 years.", preferences:"Computer savvy In Style residents go online daily to research real estate information; do their banking; track investments; trade stocks; book travel; and buy computer hardware or software, concert tickets, or tickets to sporting events. They use a financial planner and invest in stocks, bonds, money market funds, money market bank accounts, and securities. Looking toward the future, residents hold life insurance policies and contribute to IRA and 401(k) retirement accounts. To maintain their homes, they hire professional household cleaning services and contractors to remodel their kitchens. Residents stay fit by exercising, eating a healthy diet to control their weight, buying low-fat foods, and taking vitamins. They attend live musical performances and gamble at casinos. They take domestic vacations to hike, golf, and go backpacking. They read magazines, listen to news-talk radio, and watch professional sports events and golf on TV."},
    {selected:false, name:"Prosperous Empty Nesters", id:14, demographic:"Approximately 6 in 10 householders in Prosperous Empty Nesters neighborhoods are aged 55 years or older. Forty percent of the households are composed of married couples with no children living at home. Residents are enjoying the move from child-rearing to retirement. The median age is 47.6 years. Population in this segment is increasing slowly, at 0.53 percent annually; however, the pace will probably accelerate as the Baby Boomers mature. Prosperous Empty Nesters residents are not ethnically diverse; approximately 90 percent are white.", socioeconomic:"Prosperous Empty Nesters invest prudently for the future. The median household income is $63,682. Although 71 percent of the households earn income from wages and salaries, 59 percent receive investment income, 30 percent collect Social Security benefits, and 28 percent receive retirement income. Thirty-nine percent of residents aged 25 years and older hold bachelor's or graduate degrees; nearly 70 percent have attended college. Many residents who are still working have solid professional and management careers, especially in the education and health care industry sectors.", residential:"These residents live in established neighborhoods located throughout the United States; approximately one- third of these households are found on the East Coast. These neighborhoods experience little turnover from year to year. Seventy-seven percent of the housing was built before 1980. Most of the housing is single-family.", preferences:"Prosperous Empty Nesters residents value their health and financial well-being. Their investments include annuities, certificates of deposit held longer than six months, mutual funds, money market funds, tax-exempt funds, and common stock. They hold universal life insurance policies. Residents exercise regularly and take a multitude of vitamins. They refinish furniture and play golf. They also attend golf tourselected:false, naments and sports events, particularly baseball games and college football games. They order by phone from catalogs and use coupons. Households are likely to own or lease a luxury car. Prosperous Empty Nesters residents take pride in their homes and communities, so home remodeling, improvements, and lawn care are priorities. Residents will join a civic club or charitable organization, help with fund-raising, write to a radio station or newspaper editor, and volunteer. They travel extensively in the United States and abroad. They read biographies, mysteries, and history books; two or more daily newspapers; and business or fitness magazines. They watch golf, news, and talk programs on TV."},
    {selected:false, name:"Silver and Gold", id:15, demographic:"With a median age of 60.5 years, Silver and Gold residents are the second oldest of the Tapestry segments. More than 70 percent are aged 55 years or older. Most residents have retired from professional occupations. Half of the households are composed of married couples without children. This segment is small, less than 1 percent of all US households; however, annual household growth is 2.35 percent since 2000. Residents of these neighbor- hoods are not ethnically diverse; 93 percent of them are white.", socioeconomic:"These are wealthy, educated seniors. Their median household income is $62,761. Fifty-six percent of the households still earn wages or salaries, half collect Social Security benefits, 63 percent receive investment income, and 35 percent collect retirement income. The percentage of those who work from home is higher than the US worker percentage; nearly one-fourth of employed residents are self-employed, also higher than the US level.", residential:"Their affluence enables them to relocate to sunnier climates. More than 60 percent of these households are in the South, mainly in Florida. One-fourth are located in the West, mainly in California and Arizona. Neighborhoods are exclusive, with a home ownership rate of 82 percent. Silver and Gold ranks second of the Tapestry segments for the percentage of seasonal housing. Because these seniors have moved to newer single-family homes, they are not living in the homes where they raised their children.", preferences:"Silver and Gold residents have the free time and resources to pursue their interests. They travel domestically and abroad including cruise vacations. They are also interested in home improvement and remodeling projects. Although they own the tools and are interested in home improvement and remodeling projects, they are more likely to contract for remodeling and housecleaning services. Active in their communities, they join civic clubs, participate in local civic issues, and write to newspaper or magazine editors. They prefer to shop by phone from catalogs such as L.L. Bean and Lands' End. Golf is more a way of life than just a leisure pursuit. They play golf, attend tourselected:false, naments, and watch The Golf Channel. They also go to horse races, bird watching, saltwater fishing, and power boating. They eat out, attend classical music performances, and relax with a glass of wine. Favorite restaurants include Outback Steakhouse, Cracker Barrel, and Applebee's. Silver and Gold residents are avid readers of biography and mystery books and watch numerous news programs and news channels such as Fox News and CNN. Favorite non-news programs include detective dramas."},
    {selected:false, name:"Enterprising Professionals", id:16, demographic:"Young, educated, single, married, working professionals, residents of Enterprising Professionals neighborhoods have a median age of 32.8 years. Forty-three percent of the households are singles who live alone or share housing with roommates, and 43 percent are married couple families. With an annual household growth of 1.95 percent per year since 2000, the households in this segment comprise approximately 2 percent of total US households. The diversity of the population is similar to that of the United States. Most of the residents are white; however, 12.4 percent are Asian.", socioeconomic:"Median household income is $63,837. Ninety percent of the households earn income from wages and salaries; 39 percent receive income from investments. This is an educated group: approximately half of the population aged 25 years and older hold a bachelor's or graduate degree; more than three in four have attended college. These working professionals are employed in various jobs, especially in management, finance, computer, sales, and office/administrative support.", residential:"Enterprising Professionals residents move frequently to find growth opportunities and better jobs, especially in cities such as Chicago, Atlanta, and Seattle. Forty-six percent of the households are located in the South, 29 percent are in the West, and 20 percent are in the Midwest. They prefer to own instead of rent in newer neighborhoods of townhouses or apartments. For those who rent, the average gross rent is 36 percent higher than the US average.", preferences:"They are young and mobile with growing consumer clout. Those who rent hold renter's insurance policies. They rely on cell phones and e-mail to stay in touch. They go online to download videos and music, track their investments, and shop for items, including personal computers and software. They own laptops, video game systems, and digital camcorders. They love to travel abroad and in the United States often. They play video games, visit theme parks, jog, and swim. They read computer, science, and technology magazines and listen to alternative, public-all-talk, and sports radio. They eat out at Cheesecake Factory and Chili's Grill and Bar. They shop for groceries at stores such as Publix and Albertson's."},
    {selected:false, name:"Green Acres", id:17, demographic:"Seventy-one percent of the households in Green Acres neighborhoods are married couples with and without children. Many families are blue-collar Baby Boomers, many with children aged 6–17 years. With more than 10 million people, Green Acres represents Tapestry Segmentation's third largest segment, currently more than 3 percent of the US population and growing by 1.92 percent annually. The median age is 42 years. This segment is not ethnically diverse; 92 percent of the residents are white.", socioeconomic:"Educated and hard-working, more than one-fourth of Green Acres residents hold a bachelor's or graduate degree; more than half have attended college. Occupation distributions are similar to those of the United States. Seventeen percent of the households earn income from self-employment ventures. The median household income is $60,461.", residential:"Although Green Acres neighborhoods are located throughout the country, they are found primarily in the Midwest and South, with the highest concentrations in Michigan, Ohio, and Pennsylvania. A “little bit country,” these residents live in pastoral settings of developing suburban. Home ownership is at 86 percent. Typical of rural residents, Green Acres households own multiple vehicles; 78 percent own two or more vehicles.", preferences:"Country living describes the lifestyle of Green Acres residents. Pet dogs or cats are considered part of the family. These do-it-yourselfers maintain and remodel their homes; projects include roofing and installing carpet or insulation. They own all the necessary power tools, including routers, welders, sanders, and various saws, to finish their projects. Residents also have the right tools to maintain their lawns, flower gardens, and vegetable gardens. They own riding lawn mowers, garden tillers, tractors, and even separate home freezers for the harvest. Continuing the do-it-yourself mode, it is not surprising that Green Acres is the top market for owning a sewing machine. A favorite pastime is using their ice cream maker to produce homemade ice cream. They prefer motorcycles and full-size pickup trucks. For exercise, Green Acres residents ride their mountain bikes and go fishing, canoeing, and kayaking. They also ride horseback and go power boating, bird watching, target shooting, hunting, motorcycling, and bowling. They listen to auto racing and country music on the radio and read fishing and hunting magazines. Many own satellite dishes so they can watch news programs, the Speed Channel, and auto racing on TV. A favorite channel is Country Music Television."},
    {selected:false, name:"Cozy and Comfortable", id:18, demographic:"Cozy and Comfortable residents are middle-aged married couples who are comfortably settled in their single-family homes in older neighborhoods. The median age of 41.7 years is four years older than the US median of 37.2 years. Most residents are married without children or married couples with school-aged or adult children. With 8.7 million people, this is a relatively large segment that is growing moderately by 0.48 percent annually since 2000. Most of these residents are white.", socioeconomic:"Although the labor force is older, they are in no hurry to retire. Employed residents work in professional, managerial, and service occupations in a variety of industry sectors. Occupation distributions are similar to US values. The median household income is $59,287. Income for 80 percent of the households is earned from wages and salaries. Forty-six percent of households receive investment income.", residential:"Cozy and Comfortable neighborhoods are located in suburban areas, primarily in the Midwest, Northeast, and South. Many residents are still living in the homes in which they raised their children. Single-family structures make up 88 percent of the household inventory. Sixty-two percent of the housing units were built before 1970. Home ownership is at 84 percent.", preferences:"Cozy and Comfortable residents prefer to own certificates of deposit and consult a financial planner. They typically hold a second mortgage, a new car loan, a home equity line of credit, and a universal life insurance policy. Home improvement and remodeling projects are important to them. Although they will contract for some work, they attempt many projects, especially painting and lawn care. Depending on the season, they play golf or ice skate for exercise. They attend ice hockey games, watch science fiction movies on DVD, and take domestic vacations. They eat at family restaurants such as Friendly's, Bob Evans Farms, and Big Boy. Going online isn't a priority, so they own older home computers. Television is very important; many households own four or more sets so they won't miss any of their favorite shows. They watch sports, particularly football, and news programs. Reading the Sunday newspaper is part of the routine for many."},
    {selected:false, name:"Milk and Cookies", id:19, demographic:"Upscale living on a family allowance, Milk and Cookies represents young, affluent married couples who are starting their families or already have young children. The median age of 34.1 years represents the presence of kids; nearly half of the households include children. One in four householders is between the ages of 45 and 54. The population diversity is comparable to that of the United States, and the proportions of the population by race approximate the US distributions with slightly above- average ratios of black and Hispanic residents.", socioeconomic:"Ninety percent of Milk and Cookies households earn income from wages. The median household income is $57,170. Fifty-eight percent have attended college; more than 20 percent hold bachelor's or graduate degrees", residential:"Milk and Cookies residents prefer single-family homes in suburban neighborhoods of cities, largely in the South, particularly in Texas. Smaller concentrations of households are located in the West and Midwest. Housing units are generally 20–30 years old. Given the concentration of dual-income families, 71 percent of households have at least two vehicles. A family with two or more workers, more than one child, and two or more vehicles is the norm for these neighborhoods.", preferences:"As Milk and Cookies residents settle into their family- oriented lifestyle, they focus on family and the future. They are properly insured, carrying life and accidental death and dismemberment policies. They use a credit union, have overdraft protection, and usually have a new car loan. Although they may still own a motorcycle or small car, they prefer larger vehicles. When they move, they rent a U-Haul and move their own belongings. Many households own a dog. The presence of children in Milk and Cookies households drives their large purchases of baby and children's products including baby food, baby equipment, clothes, shoes, medicine, vitamins, board games, bicycles, toys, video games, and children's DVDs. Most households own one of the latest video game systems and a large- screen TV. To save time in their busy lives, they frequently buy prepared dinners from the grocery store and fast food. They play video games, go bowling, and visit theme parks such as Six Flags and Sea World. They watch professional football and basketball games. Favorite cable channels include Cartoon Network, Discovery Channel, National Geographic Channel, and BET. They also work on their lawns, tackle interior painting projects, or do minor maintenance on their vehicles."},
    {selected:false, name:"City Lights", id:20, demographic:"The City Lights segment is composed of diverse neighborhoods situated primarily in the Northeast. This dense urban market is a mixture of housing, household types, and cultures that all share the same city space. Households include families and singles, similar to the US distribution by household type. The median age is 38.3 years. Com- pared to the US population, there are fewer children and slightly more people aged 75 or older. The ethnic or racial diversity is slightly higher than the US level, with higher ratios of Asian, Hispanic, and multiracial populations.", socioeconomic:"City Lights residents earn a good living working in white-collar and service occupations. The median household income is $60,149, derived primarily from wages and some investments.", residential:"Housing types include single-family homes, townhouses, and apartments in buildings with 2 to 50 or more units. Thirty-five percent of housing are apartments in buildings with two to four units, approximately four times the national level. Unlike US housing, the proportion of single- family homes in the City Lights market is only 36 percent of the household inventory. Housing is also much older than the US average, because nearly two-thirds of the structures were built before 1960. The home ownership rate of 53 percent is lower than the national average.", preferences:"City Lights residents lead an urban lifestyle and take advantage of big-city opportunities. They buy household furnishings, groceries (including fast food and takeout), personal goods, and entertainment. They are more likely to buy household furnishings than home maintenance. They shop for clothes, shoes, jewelry, and toys at stores such as Target, Macy's, and Costco. They buy groceries at stores such as Kroger and Stop & Shop. City Lights residents take vitamins, practice yoga, and do aerobics to stay fit. They travel domestically and abroad, take cruises, go to the movies, and watch family and classic movies on DVD. They visit Atlantic City to gamble and play the lottery. They read two or more Sunday newspapers and listen to news, soft adult contemporary, and classical music radio. Many households in large cities subscribe to digital cable service; HBO is a favorite cable channel."},
    {selected:false, name:"Urban Villages", id:21, demographic:"Urban Villages neighborhoods are multicultural enclaves of young families, unique to densely populated cities in “gateway” states, primarily California. The average family size of 4.1 people is the second largest in the Tapestry system. Household types are married couples with (approximately 40 percent) and without children, single parents, and other family types. The median age is 32.9 years. Population diversity is especially high; virtually every race and culture is represented in these communities. Asians comprise 11.2 percent of the total population. Sixty-one percent of the population is Hispanic, primarily of Mexican origin. Slightly more than one-third of the population is foreign born.", socioeconomic:"Fifteen percent of Urban Villages residents aged 25 years or older have not completed high school; more than one-fourth are high school graduates, and two-fifths have attended college. Many households have two wage earners, most of whom work in the manufacturing, health care, retail trade, construction, and educational services indus- try sectors. The median household income is $58,348.", residential:"Eighty-four percent of Urban Villages households are located in California. Most homes are older, single-family structures. Approximately two-thirds of the housing units were built before 1970. The home ownership rate is 68 percent. Approximately 12 percent live in apartments, and at 3.6 percent, vacancy rates barely support turnover. A typical household owns multiple vehicles; 27 percent own three or more.", preferences:"Family and home items are household budget priorities for Urban Villages residents. Because most of their housing is older, residents repaint and remodel bathrooms and replace carpeting and roofing. Many buy groceries and baby products. They shop for groceries at Ralphs and Vons. They vacation in Hawaii and Mexico. Leisure time is a family affair; residents visit Sea World regularly. They also like to go to the movies, eat fast-food at Carl's Jr. and Del Taco, and visit family restaurants such as Denny's. Urban Villages residents rent foreign films on DVD and listen to Hispanic, contemporary hit, and variety radio. Although most watch TV, sports programming is not as popular here as in other markets. They have recently bought iPods and giant-screen TVs."},
    {selected:false, name:"Metropolitans", id:22, demographic:"Residents of Metropolitans communities prefer to live in older city neighborhoods. Approximately half of these households are singles who live alone or with others; 40 percent are married-couple families. One in four of the residents is aged 20–34 years; the median age is 37 years. Diversity is low; most of the population is white.", socioeconomic:"Half of the residents who are employed work in professional or managerial positions. More than 75 percent of the population aged 25 years and older have attended college or completed a degree program. Thirty percent have earned a bachelor's degree, and 23 percent hold a graduate degree. The median household income is $53,486. Nearly half of the households earn extra income from interest, dividends, and rental properties.", residential:"Distributed throughout the country, residents of Metropolitans neighborhoods live in an eclectic mix of single-family homes and multiunit buildings. Sixty percent of the housing units were built before 1960. These neighborhoods change slowly; since 2000, the annual household growth is 0.28 percent. The home ownership rate is 59 percent.", preferences:"Metropolitans residents are no different from other owners of older homes who incur costs for maintenance and remodeling. They will contract for lawn maintenance and professional housecleaning services. Many will own or lease a station wagon. Planning for the future, residents own shares in investment funds, contribute to IRA savings accounts, and hold large life insurance policies. These residents pursue an active, urbane lifestyle. They travel frequently for business and pleasure. They listen to jazz, classical, public, and alternative music radio. They go to rock concerts, watch foreign films on DVD, read women's fashion magazines, and play a musical instrument. They also practice yoga and go kayaking, hiking/backpacking, and water and snow skiing. Active members of their communities, Metropolitans residents join civic clubs, volunteer for environmental causes, address public meetings, and work for a political party or candidate. They also belong to business clubs and contribute to PBS. They prefer to own and use a laptop computer, preferably an Apple. They go online daily to download music and buy books, airline tickets, CDs, and clothes. They also order merchandise by mail or over the phone."},
    {selected:false, name:"Trendsetters", id:23, demographic:"On the cutting edge of urban style, Trendsetters residents are young, diverse, and mobile. More than half the households are singles who live alone or share the rent with a roommate. Families comprise the remainder. With a median age of 34.8 years, this segment is slightly younger than the US median. Ethnically diverse, 13.7 percent of the residents are Asian and 23 percent are Hispanic; both percentages are well above those of the United States.", socioeconomic:"These residents are educated professionals who work in substantive jobs. Eighteen percent of the residents who are aged 25 years and older hold a graduate degree, 30 percent have earned a bachelor's degree, and 72 percent have attended college. The median household income is $53,423. Wages account for most of the earned income; however, other sources include interest, dividends, rental properties, and self-employment business ventures.", residential:"Seventy-five percent of these neighborhoods are located on the West Coast; the other 25 percent are in the Northeast. Not ready for homeowner responsibilities, sixty-eight percent rent apartments in upscale, multiunit settlements in older urban districts. The average gross rent is one-third higher than the US average. Single-family homes and townhouses comprise the remainder of the housing types. Most of the housing was built before 1960. Because public transportation is so readily available, 18 percent of the households don't own a vehicle.", preferences:"Trendsetters residents are spenders; they shop in stores, online, and by phone. Fashion-conscious residents buy essentials at discount warehouse stores and branded clothing from stores such as Banana Republic, Gap, Nordstrom, and Macy's. To stay current on trends, they read fashion and epicurean magazines. They listen to classical, alternative music, public, and all-news radio. They are politically liberal. To keep in touch, Trendsetters residents are never far from their electronic gadgets and computers. They own the latest and greatest laptop computers, PDAs, and iPods. They go online frequently to shop, make travel reservations, research real estate or investment information, and watch videos. Many young residents are beginning to invest, especially in bonds or CDs. Health-conscious residents buy natural/organic foods, take vitamins, and exercise regularly. They go downhill skiing and practice yoga. They also travel, go to the movies, attend rock concerts, and read—especially nonfiction and biographies. When they watch TV, they prefer movie channels or MTV."},
    {selected:false, name:"Main Street, USA", id:24, demographic:"Main Street, USA neighborhoods are a mix of household types, similar to the US distribution. Approximately half of the households are composed of married-couple families, nearly one-third are single-person or shared households, and the rest are single-parent or other family households. The median age of 36.8 years nearly matches the US median. These residents are less diverse than the US population.", socioeconomic:"The median household income is $50,987, derived from wages, interest, dividends, or rental property. More than one in five residents aged 25 years and older hold a bachelor's or graduate degree; half of the residents have attended college. Occupation and industry distributions are similar to those of the United States.", residential:"A mix of single-family homes and multiunit buildings, these neighborhoods are located in the suburbs of smaller cities in the Northeast, West, and Midwest. Nearly two-thirds of the housing was built before 1970. The home ownership rate is 62.", preferences:"Family-oriented and frugal, these residents may occasionally go to the movies or eat out at a family restaurant, such as Friendly's or Red Robin, but are most likely to stay home and watch a rental movie or play games with their children. They own pet cats. They play baseball and basketball and go swimming. They listen to classic hits and rock radio and watch cartoons and courtroom shows on TV. They go to the beach and theme parks or take domestic vacations to visit with family or see national parks. They go online periodically to look for jobs, research real estate, and play games and are beginning to shop online. Those who do not have Internet access at home will go online at school or the public library. They use the Yellow Pages to find veterinarians or stores. They will invest in small home improvement and remodeling projects, usually doing the work themselves instead of hiring a contractor. They buy the tools and supplies for these projects from Home Depot or Ace Hardware. They keep up their lawns and gardens by planting bulbs, fertilizing, and applying lawn care products regularly."},
    {selected:false, name:"Salt of the Earth", id:25, demographic:"Sixty-five percent of Salt of the Earth households are married couples with and without children. Twenty percent of the households are singles who live alone. The average household size of 2.6 people matches the US figure; the average family size of three is below the US value. The median age is 42.7 years. These neighborhoods are the least diverse of the Tapestry segments.", socioeconomic:"These residents work in professional and managerial positions and unskilled labor jobs. Higher than average proportions work in skilled labor occupations. Approximately 20 percent of the workers are employed in the manufacturing sector. The median household income of $48,409, slightly lower than the US figure. At higher than national rates, residents supplement their wages with income from interest, dividends, rental properties, self-employment businesses, retirement plans, and Social Security benefits. Forty-one percent of the residents aged 25 years and older have attended college; 15 percent have earned a bachelor's or graduate degree.", residential:"Although these neighborhoods are found in rural areas across the United States, nearly half are in the Midwest, with concentrations in Pennsylvania, Ohio, Indiana, and Michigan. The other half are in the South and Northeast. Eighty-four percent of the residents own their homes. Most of the housing is single family; 12 percent are mobile homes. Twenty-two percent of the homes were built before 1940.", preferences:"Salt of the Earth residents are settled, traditional, and hardworking. Independent and self-reliant, they tackle small home improvement and remodeling projects. They spend money and time on their flower and vegetable gardens and own the necessary tools to handle these chores successfully. Twenty-eight percent of the households own three or more vehicles including a truck; many own a motorcycle. One of Tapestry Segmentation's top segments for owning or leasing multiple vehicles, these residents prefer domestic vehicles and do their own maintenance. Most of them carry insurance policies to protect themselves and their families. They invest in annuities, certificates of deposit, and US savings bonds. Many families own two or more pets, either dogs or cats. They eat out at family restaurants such as Bob Evans Farms or Cracker Barrel. Satisfying their sweet tooth, they often bake goodies at home. They go fishing, hunting, target shooting, and boating and work out on indoor exercise equipment such as stationary bikes and treadmills. They read fishing and hunting magazines. They listen to country music radio and follow NASCAR racing. Many households own a satellite dish so they can watch CMT and the Speed Channel. Favorite TV programs include auto racing, horse racing, truck and tractor pulls/ mud racing, and weekly sitcoms."},
    {selected:false, name:"Midland Crowd", id:26, demographic:"The growing population of 12 million, approximately 4 percent of the US population, identifies Midland Crowd as Tapestry Segmentation's largest segment. Since 2000, the population has grown by 2.18 percent annually. The median age of 37.9 years parallels that of the US median. Sixty-two percent of the households are married couple families; half of them have children. Twenty percent of the households are singles who live alone. Midland Crowd neighborhoods are not diverse.", socioeconomic:"Median household income is $47,544, slightly lower than the US median. Most income is earned from wages and salaries; however, self-employment ventures are slightly higher for this segment than the national average. Half of the residents who work hold white collar jobs. More than 45 percent of the residents aged 25 years and older have attended college; 16 percent have earned a bachelor's or graduate degree.", residential:"Midland Crowd residents live in housing developments in rural villages and towns throughout the United States, mainly in the South. Three-fourths of the housing was built after 1969. The home ownership rate is 80 percent, higher than the national rate of 64 percent. Two-thirds of the housing is single-family houses; 24 percent are mobile homes.", preferences:"These politically active, conservative residents vote, work for their candidates, and serve on local committees. Their rural location and traditional lifestyle dictate their product preferences. A fourth of the households own three or more vehicles; they typically own or lease a truck, and many own a motorcycle. Proficient do-it-yourselfers, they work on their vehicles, homes, and gardens and keep everything in tip-top shape. They hunt, fish, and do woodworking. Dogs are their favorite pets. They patronize local stores or shop by mail order. They have recently bought radial tires. They often go to the drive-through at a fast-food restaurant. Many households own a satellite dish so they can watch CMT, the Speed Channel, Home & Garden Television, NASCAR racing, rodeo/bull riding, truck and tractor pulls, fishing programs, and a variety of news programs. They listen to country music on the radio and read fishing and hunting magazines."},
    {selected:false, name:"Metro Renters", id:27, demographic:"Young, educated singles, residents of Metro Renters neighborhoods are just beginning their professional careers in some of the largest US cities such as New York, Chicago, and Los Angeles. Residents will sometimes share housing with a roommate to help defray the cost of their high rent. Households are either single person or shared. The median age of 32.1 years is younger than the US median of 37 years. Approximately 30 percent are in their 20s; 14 percent are in their early 30s. This younger population is also more diverse than the US population; 11.5 percent of the residents are Asian.", socioeconomic:"The median household income is $48,211. Approximately 60 percent of employed residents work in professional and management occupations, most in the service industry sector. One of Tapestry Segmentation's most educated markets, more than one in four Metro Renters residents aged 25 years or older holds a graduate degree; one in three has earned a bachelor's degree. More than 80 percent of these residents have attended college; 17 percent are still enrolled in undergraduate or graduate school.", residential:"Metro Renters neighborhoods are found in the largest metropolitan centers across the United States, with the highest concentrations in California, New York, and Illinois. Approximately 90 percent of the housing is apartments; 37 percent in high-rise buildings.", preferences:"Because they rent, “home and hearth” products are low priority, although they will buy new furniture from stores such as Crate & Barrel or Pier One Imports. Most of them have renter's insurance. They buy clothes and other merchandise from traditional stores or online from favorites such as Banana Republic, Gap, Nordstrom, amazon.com, and barnesandnoble.com. They take their clothes to dry cleaners.Active Metro Renters residents work out regularly at clubs, play tennis and volleyball, practice yoga, ski, and jog. They take advantage of their urban milieu; they go dancing, visit museums, attend classical or rock concerts, go to karaoke nights and the movies, and eat out. Painting and drawing are favorite hobbies. Residents enjoy traveling domestically and overseas and drinking domestic and imported beer and wine. They read two or more daily newspapers; history books; and airline, fashion, epicurean, travel, and business/finance magazines. They listen to alternative, jazz, classical music, all-news, and public radio. They seldom watch TV; most households own only one set so they can watch movies and news programs. They rent foreign and classic films on DVD. They go online frequently to look for jobs, make travel arrangements, download music, research real estate, watch videos, and shop. Many buy their PCs online; they prefer laptops, although many also own PDAs. Politically, these neighborhoods are liberal."},
    {selected:false, name:"Aspiring Young Families", id:28, demographic:"Most of the residents in these neighborhoods are young, startup families, married couples with or without children, and single parents. The average family size of 3.1 people matches the US average. Approximately two-thirds of the households are families, 27 percent are single person, and 9 percent are shared. Annual population growth is 1.13 percent, higher than the US figure. The median age is 31.1 years; nearly 20 percent of the residents are in their 20s. Typical of younger populations, Aspiring Young Families residents are more ethnically diverse than the total US population.", socioeconomic:"The median household income is $46,275; wages provide the primary source of income. Approximately 60 percent of employed residents work in professional, management, sales, or office/administrative support positions. Overall, 87 percent of residents aged 25 years and older have graduated from high school, 58 percent have attended college, and 24 percent hold a bachelor's or graduate degree.", residential:"In large, growing southern and western metropolitan areas, the highest concentrations of these neighborhoods are found in California, Florida, and Texas. Twenty percent are located in the Midwest. Tenure is nearly even; 51 percent of the households rent; 47 percent own their homes. Residents live in moderately priced apartments, single-family houses, and startup townhouses. Most of the housing was built after 1969. The average gross rent is comparable to the US average.", preferences:"Focused on family and home, residents of Aspiring Young Families communities spend most of their discretionary income for baby and children's products, toys, home furnishings, cameras, and video game systems. They go online to look for jobs, play games, and buy personal preference items such as music and computer equipment. These residents would probably go to a theme park while on vacation. They play video games, watch TV, eat out, and go to the movies. They also play basketball and go bowling and biking. They listen to urban stations and professional basketball games on the radio and watch sports, news, entertainment, and courtroom shows on TV. They eat out at family restaurants such as Chili's or IHOP and go to Jack in the Box or Sonic for fast food."},
    {selected:false, name:"Rustbelt Retirees", id:29, demographic:"Most of the households in these neighborhoods are married couples with no children or singles who live alone. Twenty percent are married couples with children. The median age is 44.2 years; more than one-third of the householders are aged 65 years or older. Seventeen percent are veterans. These neighborhoods are not ethnically diverse.", socioeconomic:"Many residents still work. Most households derive income from wages. However, 45 percent of households earn income from interest, dividends, and rental properties; 40 percent draw Social Security benefits; and 28 percent receive retirement income. The median household income is $46,909, just below that of the US median. Overall, 88 percent of residents aged 25 years and older have graduated from high school, approximately 50 percent have attended college, and 20 percent hold a bachelor's or graduate degree.", residential:"Most Rustbelt Retirees neighborhoods can be found in older, industrial northeastern cities, especially in Pennsylvania, and other states surrounding the Great Lakes; 67 percent of the households are located in the Northeast and Midwest. Twenty-eight percent are in the South. Eighty-four percent of the housing is single-family homes; three-fourths were built before 1970. Unlike many retirees, these residents are content to stay put and live in the same house for years.", preferences:"These hardworking folks are settled; many have lived in the same house for years. Loyal to country and community, they tend to be politically conservative. They participate in public activities and fund-raising, visit elected officials, and work for political parties or candidates. They belong to fra- ternal organizations, unions, and veterans' clubs. Practical people who take pride in their homes and gardens, Rust- belt Retirees buy home furnishings and work on remod- eling projects to update their houses. They watch their pennies, use coupons, and look for bargains at discount stores and warehouse clubs. They own savings bonds and certificates of deposit and hold life insurance policies. They eat out at family restaurants such as Perkins and Friendly's and watch rented movies on DVD instead of going to the theater. They also go bowling, play cards and bingo, gamble in Atlantic City, and go to horse races. They watch home improvement shows, sports events, news programs, game shows, and old reruns on TV. Favorite channels include HGTV, the Hallmark Channel, and the Weather Channel. They listen to country, oldies, and sports radio and peruse the daily newspaper."},
    {selected:false, name:"Retirement Communities", id:30, demographic:"Most of the households in Retirement Communities neighborhoods are single seniors who live alone; a fourth is married couples with no children living at home. This older market has a median age of 50.3 years. One-third of the residents and 44 percent of householders are aged 65 years or older. Twenty-three percent of the population and 31 percent of householders are aged 75 years or older. Most of the residents are white.", socioeconomic:"The median household income for Retirement Communities is $46,251, slightly below the US median. Nearly half of the households earn income from interest, dividends, and rental properties; 45 percent receive Social Security benefits; and 26 percent receive retirement income. Most of those still working are employed in white- collar occupations. Retirement Communities residents are an educated group: 14 percent of the residents aged 25 years and older hold a graduate degree, 35 percent have a bachelor's degree, and more than 60 percent have attended college.", residential:"Retirement Communities neighborhoods are found mostly in cities scattered across the United States. Most housing was built after 1959. Congregate housing with meals and other services included in the rent is a feature of these neighborhoods. Fifty-seven percent of the households live in multiunit buildings; however, 34 percent of the housing is single-family structures, and 8 percent is townhouses. The home ownership rate is 53 percent.", preferences:"With more time to spend on leisure activities and hobbies, residents play musical instruments, paint or draw, work crosswords, play bingo, or attend adult education classes. They also visit museums, attend the theater, go dancing, practice yoga, go canoeing, and play golf. They will travel to gamble in Atlantic City or to visit Disney World. They attend sports events such as golf tourselected:false, naments, tennis matches, and baseball games. They spend time with their grandchildren and spoil them with toys. Politically active, these residents are “joiners” and belong to civic clubs and charitable organizations. They own stocks and bank online. They prefer to own or lease a domestic vehicle. These residents describe themselves as moderate or frequent viewers of daytime and primetime TV. They watch news programs and baseball games, tennis matches, and golf tourselected:false, naments. Cable channel favorites are Bravo, truTV, ESPN news, and Travel Channel. They listen to classical and public radio. Avid readers, they regularly read daily newspapers."},
    {selected:false, name:"Rural Resort Dwellers", id:31, demographic:"These neighborhoods are found in pastoral settings in rural nonfarm areas throughout the United States. Household types include empty-nester married couples, singles, and married couples with children. The median age is 49.4 years; more than half are aged 55 and older. Most residents are white in these low-diversity neighborhoods.", socioeconomic:"Although retirement beckons, most of these residents still work. The median household income is $45,733, slightly below the US level. Six percent of those who are employed work at home, twice the US rate. Because so many residents are aged 65 and older, receipt of retirement income and Social Security benefits is common. More than two-fifths collect investment income; approximately 20 percent receive self-employment income. Nearly one in four residents aged 25 years and older holds a bachelor's or graduate degree; more than half of the residents have attended college.", residential:"The number of households in these small, low-density neighborhoods is growing at 1.5 percent annually. Seventy-eight percent of the housing is single-family structures; 15 percent is mobile homes. Home ownership is at 80 percent. Of the Tapestry segments, Rural Resort Dwellers has the highest percentage of seasonal housing, 16 times higher than the national level.", preferences:"These residents live modestly and have simple tastes. They often work on home improvement and remodeling projects and own garden equipment to maintain their yards. They cook and bake at home. Many households own multiple pets, particularly dogs and cats. Riding lawn mowers and satellite dishes are familiar sights in these areas, along with multiple vehicles, including a truck. Active participants in local civic issues, residents also belong to environmental groups, church and charitable organizations, fraternal orders, unions, and veterans' clubs. They go hiking, boating, canoeing, hunting, fishing, horseback riding, and golfing. They listen to country radio and watch Animal Planet, CMT, BBC America, the National Geographic Channel, and primetime dramas on TV. The older residents focus on their general health care, prescription medications, and financial- and retirement- related matters. Many residents actively manage or plan their investments and retirement savings. The self- employed residents are more likely to have IRAs than 401(k) plans."},
    {selected:false, name:"Rustbelt Traditions", id:32, demographic:"These neighborhoods are primarily a mix of married- couple families, single parents, and singles who live alone. With a population of 8.4 million, this segment is one of Tapestry Segmentation's largest. The median age is 35.9 years, just below the US median. There is little diversity in these communities.", socioeconomic:"The median household income is $42,337. Half of the employed residents work in white-collar jobs. For years, these residents sustained the manufacturing industry that drove local economies. Now, the service industry predominates, followed by manufacturing and retail trade. Their education attainment is improving; more than 84 percent of residents aged 25 years and older have graduated from high school, 15 percent hold a bachelor's or graduate degree, and 44 percent have attended college.", residential:"The backbone of older industrial cities in the Great Lakes border states, residents of these neighborhoods live in modest, single-family homes. Home ownership is 70 percent. The relatively low median home value Is because nearly two-thirds of the housing was built before 1960.", preferences:"These residents stick close to home; for years, they've lived, worked, shopped, and played in the same area. Not tempted by fads, they stick to familiar products and ser- vices. They drive domestic cars. They will spend money on their families, yard maintenance, and home improvements. They will hire contractors for special projects such as the installation of roofing, carpet, and flooring. These financially conservative residents prefer to bank at a credit union and have personal savings. They might carry a personal loan and hold low-value life and homeowner's insurance policies. They're frugal and shop for bargains at Sam's Club, JCPenney, and Kmart. They go online weekly to play games and shop. They go bowling, fishing, and hunting and attend car races, country music shows, and ice hockey games. They're big TV fans; they watch sitcoms and sports events. They also subscribe to cable and watch it regularly. Favor- ite channels are truTV, the Game Show Network, and the Disney Channel."},
    {selected:false, name:"Midlife Junction", id:33, demographic:"The median age for residents in these neighborhoods is 37 years; nearly 20 percent are aged 65 years or older. Households are a mix of family types and singles who live alone or share housing. Nearly half are married-couple families; 31 percent are singles. Most of these residents are white.", socioeconomic:"Most are still working; although at 61 percent, the labor force participation rate is slightly below average. A third of the households receive Social Security. The median household income is $42,694. Educational attainment levels are comparable to the US levels.", residential:"Although scattered in suburbs across the country, these neighborhoods are found more frequently in the South and Midwest. Sixty-two percent of residents own their homes, close to the US rate. Nearly two-thirds of the housing is single family; the remainder are primarily apartments in multiunit buildings.", preferences:"Midlife Junction residents live quiet, settled lives as they move from child-rearing into retirement. To finance their retirement, they own certificates of deposit, savings bonds, and IRAs. They're careful spenders, always looking for bargains, and not swayed by fads. On weekends, they eat fast food or go to family restaurants such as Friendly's or Perkins. They drive standard- sized domestic cars and shop by mail or phone from the L.L. Bean and JCPenney catalogs. They communicate with friends and family by e-mail. They go fishing, take walks, work crossword puzzles, play board games, do woodwork- ing, and read science fiction or romance novels. They watch TV network shows and news programs."},
    {selected:false, name:"Family Foundations", id:34, demographic:"Family is the cornerstone of life in these neighborhoods that are a mix of married couples, single parents, grandparents, and young and adult children. The average family size is 3.3. The median age is 39.1 years, slightly older than the US median; 7 in 10 are aged 45 or older. Diversity is low; 84 percent of the population is black.", socioeconomic:"The median household income is $38,460. Some workers are retiring. More than 20 percent of the employed residents work for the government. Approximately one-third of the households are on Social Security or public assistance. Although education attainment levels are below the US level, a slightly higher proportion of residents aged 25 or older have graduated from high school.", residential:"These small urban communities are located in large metropolitan areas, primarily in the South and Midwest. Because these residents tend to stay put, very little household growth has occurred since 2000. Sixty-eight percent own their homes. Most of their houses are single-family, built before 1970.", preferences:"Active in their communities, Family Foundations residents attend church, serve on church boards, help with fund- raising projects, and participate in civic activities. They spend money on their families and home maintenance projects. Careful consumers, they watch their budgets. They eat at home, shop at discount stores such as Marshalls and T.J. Maxx, and take advantage of savings at Sam's Club. They're big TV fans; they watch courtroom shows, sports, and news programs. Viewership rates are very high; cable subscriptions are near the US level. Many households own multiple sets so they won't miss anything. They listen to gospel, urban, and jazz radio and read newspapers, Entertainment Weekly, and general editorial and newsmagazines. Basketball is a favorite sport; they play, attend professional games, watch games on TV, and listen to games on the radio."},
    {selected:false, name:"International Marketplace", id:35, demographic:"Located primarily in cities in “gateway” states on both US coasts, International Marketplace neighborhoods are developing urban markets with a rich blend of cultures and household types. The population is young, with a median age of 32 years. Approximately 70 percent of the households are families; 44 percent are married couples with children and single parents. The average family size is 3.7. International Marketplace is the second most diverse of the Tapestry segments. More than half of the total population is Hispanic; 11.6 percent is Asian, and 7 percent is of two or more races. A high proportion of immigrants, including recent arrivals, live in these neighborhoods.", socioeconomic:"A fifth of International Marketplace households has one or more persons who has difficulty speaking English. Residents who work have jobs in the manufacturing, retail trade, health care, and other services industry sectors. Eighty-two percent of the households earn income from wages; some receive Supplemental Security Income or public assistance. The median household income is $42,725. College and graduate school enrollment is similar to the US average; educational attainment levels are below the US level.", residential:"These densely settled, older urban neighborhoods are found in California and the northeast, around the largest US cities such as New York City and Los Angeles. A typical family rents an apartment in an older, multiunit building; because renters are dominant, home ownershi", preferences:"Because family is a top priority, “home and hearth” products aren't important to these folks. They buy groceries, diapers, and children's clothes. They keep in touch with overseas relatives by long-distance calls or traveling to visit. They shop at Marshalls and Costco. Their favorite drug store is Rite Aid. They pop in to 7-Eleven or am/pm for quick purchases such as a gallon of milk. They watch TV and listen to Hispanic, urban, and contemporary radio instead of reading newspapers and magazines. They drink domestic or imported beer. They show no brand preference between foreign or domestic cars.p is only 30 percent. Most housing was built before 1970."},
    {selected:false, name:"Old and Newcomers", id:36, demographic:"Residents of these transitional neighborhoods are either beginning their careers or retiring. They range in age from their 20s to 75 and older. Their median age of 36.3 years splits this disparity. There are more singles and shared households than families in these neighborhoods. Most of the residents are white; however, the diversity closely resembles that of the United States.", socioeconomic:"The median household income of $39,234 is below the US median. Educational attainment, college, and graduate school enrollment are above average. The distribution of employees by occupation is similar to that of the United States.", residential:"Spread throughout metropolitan areas of the United States, Old and Newcomers neighborhoods sustain a lot of transition. More than half the population aged five years and older has moved in the last five years. More than 60 percent rent; approximately half in mid- or high- rise buildings, with nearly 14 percent in two- to four-unit buildings. Six in ten housing units were built between 1969 and 1989. The average gross rent in these neighborhoods is similar to the US average.", preferences:"Their purchases reflect the unencumbered lifestyles of singles and renters. They spend less at the grocery store than larger households. A domestic subcompact or com- pact car serves them well. They arrange their vacations to keep in touch with out-of-town relatives and friends. They read fiction and nonfiction, newspapers, and magazines. They watch TV, listen to contemporary hits radio, go to the movies, and rent DVDs to view at home. Their leisure activities are as varied as their ages. They exercise by walking, swimming, and going bowling. They also cook at home."},
    {selected:false, name:"Prairie Living", id:37, demographic:"Small, family-owned farms in the Midwest dominate this stable market. Two-thirds of these households are composed of married couples with or without children. These residents are slightly older, with a median age of 42.9 years. There is little diversity here; 9 in 10 of these residents are white.", socioeconomic:"One in four residents who work are self-employed. Even though agricultural jobs are important to the local economy, 40 percent of the residents work in white-collar jobs. Thirty-one percent of the households receive Social Security benefits; 43 percent collect income from their investments. The median household income is $43,161. Fifty-three percent of the residents aged 25 years and older have graduated from high school; the number of those who hold a bachelor's or graduate degree is below the US level.", residential:"Most of these Midwestern neighborhoods are centered in Iowa, Nebraska, Minnesota, and Kansas. Smaller groups are concentrated in the West and South. Eighty-one percent own their homes. Most housing is single-family; however, 11 percent are mobile homes, slightly higher than the US average. Thirty-six percent of the housing was built before 1940. Multiple vehicles are necessary to cover these rural areas. Approximately three-quarters of the households own two or more vehicles; one-third have three or more.", preferences:"Their purchases reflect their rural lifestyle; Prairie Living residents buy work boots and hunting clothes. They can with pressure cookers and fill their separate freezers with produce from their vegetable gardens. They own riding mowers, gardening equipment, and tools to service their vehicles and make home repairs. They will tackle home improvement projects such as kitchen remodeling. They're pet owners. Many own satellite dishes because cable TV is not available in many rural neighborhoods. Prairie Living residents are loyal country music fans and tune in to radio and television for their favorite music. They enjoy hunting, fishing, horseback riding, target shooting, and riding around on their all-terrain vehicles. They tend to be political conservatives. They prefer domestic vehicles, especially trucks. Civic-minded Prairie Living residents serve on church boards, speak at public meetings, volunteer for charitable organizations, and help with fund- raising. Prairie Living households shop for bargains. Wal-Mart is, by far, their favorite retailer, followed by Kmart and JCPenney. They often rely on a Wal-Mart Supercenter for extra grocery shopping."},
    {selected:false, name:"Industrious Urban Fringe", id:38, demographic:"Family is central to residents of Industrious Urban Fringe neighborhoods; slightly more than half of the households have children. Fifty-four percent are married-couple families; 17 percent are single parents. Multigenerational households are relatively common. The high proportion of children contributes to the relatively low median age of 29 years. Hispanics comprise 61.7 percent of the residents in these neighborhoods. More than one-fourth are foreign born, bringing rich, diverse cultures to these urban outskirts neighborhoods.", socioeconomic:"The median household income is $40,400. The large average household size of 3.45 lowers the discretionary income available compared to segments with similar income. Residents take advantage of job opportunities offered in nearby cities; most work in the manufacturing, construction, retail trade, and service industries.", residential:"These neighborhoods are located in the West and South; the highest concentrations are in California, Texas, and Florida. Home ownership is at 62 percent. Single- family housing is dominant in these areas. To find more affordable housing, many live farther out from the city.", preferences:"Industrious Urban Fringe households balance their budgets carefully. Mortgage payments take priority. They shop at Wal-Mart, Kmart, Target, and other major discount stores for baby and children's products. They dine out less often than average households. Many have no financial investments or retirement savings other than their homes and are less likely than average to carry health insurance. Keeping in touch is important to these residents; they often have a second phone line at home. They watch movies at home and will also see multiple movies at the theater each month. Television and radio are better than newspapers and magazines to reach these residents. They watch TV as much as the average US household, but subscribe to cable less often. They listen frequently to Hispanic, contemporary hit, and urban radio."},
    {selected:false, name:"Young and Restless", id:39, demographic:"Change is the constant for Young and Restless house-holds. This young, on-the-go population has a median age of 28.9 years. Approximately two-thirds of them are younger than 35. Fifty-eight percent of these house- holds are either single person or shared. Neighborhoods are diverse. Fifty-six percent of the residents are white; however, an above-average representation of blacks, Hispanics, and Asians also live in these neighborhoods.", socioeconomic:"The median household income is $39,765. Although the median household income is below the US median; only 23 percent of these residents have children, giving them more disposable income than segments with similar income levels. They are educated; 36 percent aged 25 years or older hold a bachelor's or graduate degree; 69 percent have attended college. These ethnically diverse folks are very career-oriented. Most employed residents have professional, sales, service, or office/administration support jobs.", residential:"These neighborhoods are in metropolitan areas in the South, West, and Midwest; the highest concentration is in Texas. Ranked fifth of the Tapestry segments for renters, 85 percent rent apartments in multiunit buildings. Most of the housing was built in the 1970s and 1980s. They don't mind moving for better jobs; 85 percent have moved in the last five years.", preferences:"These young, single professionals are pursuing their careers and living a busy lifestyle. They are technologically savvy and take advantage of the convenience provided by many products and services. They go online to communicate with friends and family, shop, bank, and look for jobs. They read magazines to stay current on the latest lifestyle and entertainment trends and are just as likely to read a music magazine as a business publication. They go online for the latest news and sports. Television viewing is average. Radio is a good way to reach them; they listen to urban and contemporary hit music. Seeing movies at theaters and on DVD is a major source of entertainment. They also enjoy going to bars or nightclubs. Their busy schedule also includes working out at the gym and playing various sports. Domestic vehicles have a slight edge in this market."},
    {selected:false, name:"Military Proximity", id:40, demographic:"The second youngest of the Tapestry segments, with a median age of 22.4 years, Military Proximity residents are young, married, and beginning parenthood. Ninety-two percent of the householders are younger than 45 years. Two-thirds of the households are composed of married couples with children, the dominant household type for this segment. With an average of 3.37, Military Proximity is one of Tapestry Segmentation's top segments for household size.", socioeconomic:"The Armed Forces is the commonality for these residents. More than three-fourths of the labor force are on active duty or have civilian jobs on military bases. The median household income is $41,240. Most families are too young to have accumulated much wealth. The educational attainment in this market is unique. Although the percentage of residents aged 25 years and older who hold a bachelor's or graduate degree is slightly below the US level, 72 percent have attended college.", residential:"Moving is routine for Military Proximity residents. More than 90 percent of householders have moved within the last five years. These communities are located throughout the United States but mainly in the South and West; the highest state concentrations are in California, Texas, Hawaii, North Carolina, and Virginia. Households live in a mix of townhomes and apartments in small multiunit buildings with fewer than 20 units. Only one-fifth of the housing is single-family dwellings. Military Proximity has the second highest percentage of renter-occupied housing units among the Tapestry segments; more than 9 in 10 rent. Most of these housing units were built between 1950 and 1979.", preferences:"Home life for Military Proximity residents revolves primarily around the family. They routinely shop for baby and children's products and clothing at major discount department stores. Whenever possible, they shop at the military commissary. They entertain their children with DVDs. Subscribing to cable television is for the adults as much as for the children; both Nickelodeon and MTV are popular. Besides listening to music on the radio, they also tune in to news and talk programs. The family portrait of a Military Proximity household is not complete without pets, particularly dogs. To transport their families, many households own SUVs. Having two cars is common to juggle their daily needs. Military Proximity households are comfortable with personal computers and the Internet. In fact, their Internet usage exceeds that of the general population. Home personal computers are used by both adults and children. Renter's insurance is popular in this market, although the coverage is usually low. Despite their youth, the proportion of households investing for retirement is similar to the US average. To ensure the stability of their families' financial future, Military Proximity households are more likely to have disability income insurance."},
    {selected:false, name:"Crossroads", id:41, demographic:"Crossroads neighborhoods are growing communities in small towns in the South, Midwest, and West. Married couples with and without children and single parents are the primary household types in these areas. Younger than the US average, they have a median age of 33.6 years; nearly half are younger than 45. This population is growing at 1.4 percent annually, faster than the growth of the US population. One in five is Hispanic, a higher proportion than the United States.", socioeconomic:"The median household income is $37,185. Educational attainment is lower than the US average; 39 percent of residents aged 25 years or older have attended college, compared to 54 percent for the United States. Most employed residents work in the manufacturing, retail, construction, and service industries.", residential:"Affordable housing in these small-town communities provides opportunities for young families to own their homes. Home ownership is 69 percent. More than half of the housing is mobile homes; 36 percent are single-family dwellings. Most were built after 1969.", preferences:"Mindful of their expenses, Crossroads households budget for what they buy and choose selectively where to spend their money. They shop at discount department stores such as Wal-Mart and Kmart. Many shop for groceries at Wal-Mart Supercenters. Their priorities are their families and their cars. Children are the focus of their lives, and they buy children's products in addition to groceries. They drive domestic cars and trucks and handle the maintenance themselves. Investing and saving for retirement are a low priority; many households do not own mutual funds, stocks, or retirement savings accounts. Home improvement projects also rank low. They watch NASCAR racing and other sports on TV. Typically, they own a satellite dish or subscribe to cable. They also like to listen to the radio, preferring country and contemporary hit music to other formats. They read the newspaper less frequently than average US households; however, they read magazines, especially automotive, boating, motorcycle, and fishing publications. They go fishing and watch movies on DVD."},
    {selected:false, name:"Southern Satellites", id:42, demographic:"Found primarily in the rural South, Southern Satellites households consist of married couples with and without children; 22 percent are singles. The median age of 39.6 years is near the US median of 37.2. This segment has low diversity; 87 percent of the residents are white.", socioeconomic:"The median household income is $37,185. Most households earn income from wages and salaries; 28 percent receive Social Security benefits. The manufacturing and service industry sectors provide most of their jobs. Educational attainment is lower than the national level; 24 percent of residents aged 25 years and older have not graduated from high school.", residential:"Eighty percent of these households are in the South. Primary housing types in these neighborhoods are newer single-family dwellings for two-thirds of the households; 30 percent live in mobile homes. The home ownership rate is 79 percent. Nearly two-thirds of the housing was built after 1969. Vacancy rates are slightly above average.", preferences:"These rural residents enjoy country life. Fishing and hunting are two favorite leisure activities, and Southern Satellites residents spend money for magazines, clothes, and gear related to these interests. Because cable is not always available, many residents own satellite dishes. Many own pets. They work in their vegetable gardens and might own equipment such as riding mowers and tillers to help with outdoor chores. Most households have two or more vehicles to meet their transportation needs; they prefer domestic cars, and many drive trucks. They consider themselves to be politically conservative. They read newspapers and magazines infrequently; however, they listen to country radio and watch fishing programs, NASCAR races, and country music programs on TV. Owning personal computers and going online from home isn't important to these residents."},
    {selected:false, name:"The Elders", id:43, demographic:"With a median age of 71.2 years, The Elders is Tapestry Segmentation's oldest segment. Eighty percent of the householders are aged 65 years or older. This population is growing by 1.22 percent annually. Nine in ten households are either married couples with no children living at home or singles. The small household size of 1.7 reflects those two household types. More than 4 in 10 live alone, one of the top 10 ratios among the Tapestry segments. There is no ethnic diversity; 95 percent of the population is white.", socioeconomic:"Most of these residents have retired; 80 percent receive Social Security benefits, more than three times the national level. Forty-eight percent collect retirement income, more than two-and-one-half times the national level; 65 percent receive income from their investments. Only 20 percent are still working. The median household income is $38,843, lower than the US median of $50,227.", residential:"Representing the highest concentration of retirees, The Elders residents favor communities designed for senior living, primarily in warm climates. Half of these households are located in Florida, and 30 percent are found in Arizona and California. Nine in ten households live in owner- occupied housing. Housing types are mixed; half are single-family homes, one-third are multiunit buildings, and 17 percent are mobile homes.", preferences:"Informed, independent, and involved, these seniors are members of veterans' clubs and fraternal orders. They watch their diets; visit their doctors regularly; take vitamins and dietary supplements; buy low-cholesterol, fat-free, low-sodium, low-calorie, and sugar-free food; and take prescription drugs to manage various health conditions. To reduce their caffeine intake, they drink decaffeinated coffee and caffeine-free diet colas. Their diverse investment portfolios include shares in tax-exempt funds, annuities, and insured money market accounts. Many hold long-term care and travel insurance policies. Golf is important to them; they play golf, buy golf clothes, and watch golf tourselected:false, naments on TV. They also walk, work crosswords, fish, gamble at casinos, go to the theater, and eat out. Freed from work, many travel domestically and abroad. A cruise is a favorite vacation. TV is part of their daily routine; most subscribe to cable. They watch a variety of news programs, movies, game shows, and sports. They read mysteries and daily newspapers. They have a slight preference for domestic vehicles; many belong to an auto club. They prefer to shop at Wal-Mart, Target, and JCPenney instead of other department stores."},
    {selected:false, name:"Urban Melting Pot", id:44, demographic:"Recently settled immigrants live in ethnically rich Urban Melting Pot neighborhoods. More than half of the population is foreign born; half of these have come to the United States in the last 10 years. The median age is 36.3 years, slightly younger than the US median of 37.2. Distinctly diverse, more than one in four are Hispanic. Whites represent 47 percent of the population; Asians, 30 percent; and 6 percent are multiracial. Household types are equally diverse: 45 percent are married couple families; 30 percent are singles who live alone; single parents, other family types, and shared households also live in these neighborhoods.", socioeconomic:"The median household income is $39,570. Wages and salaries provide income for most households. Some receive income from Supplemental Security Income and public assistance. As expected in a large urban center, the educational attainment levels vary. Although the proportion of the population aged 25 years and older who have no high school diploma is high compared to that of the United States, the proportion with a bachelor's or graduate degree is comparable to the US level. Twenty percent are enrolled in college or graduate school. Although the cost of urban living is high, generally, urban areas provide better employment opportunities. Nearly half of the employed residents work in the service industry sectors.", residential:"Three-fourths of Urban Melting Pot households rent. Half of these housing units were built before 1950. Most of these neighborhoods are located in the high-density, urban canyons of large cities; 70 percent are in New York, and 16 percent are in California. Urban Melting Pot neighborhoods are the second most densely populated of the Tapestry segments. Because transportation is widely accessible, 47 percent of the households don't own a vehicle.", preferences:"Fashion conscious yet cost conscious, Urban Melting Pot residents love to shop. Macy's is one of their favorite shopping haunts, but they shop at other upscale retailers, as well as warehouse/club stores, especially for clothes and jewelry. Distance does not deter these residents from contacting family living outside the United States. They keep in touch with phone calls and foreign travel. Because so many rent, some households need to wash clothes at laundromats. In their spare time, they go to the beach, visit theme parks, gamble at casinos such as those in Atlantic City, and buy lottery tickets. They watch news programs and movies on TV. They would rather see professional sports on TV than college games; they really like to watch baseball games. They listen to contemporary hit, all-news, Hispanic, and soft rock radio."},
    {selected:false, name:"City Strivers", id:45, demographic:"Residents of this young, relatively diverse urban market have a median age of 33.7 years and a 68 percent mix of family types, such as married couples, single parents, and other families. Nearly eight in ten residents are black.", socioeconomic:"The median household income is $37,034. Some house- holds receive Supplemental Security Income or public assistance income. Education attainment levels are below those of the United States; approximately 43 percent of residents aged 25 years and older have attended college. Approximately half of employed residents work in the service and health care industry sectors in the city. Twenty-two percent of the residents who are employed are government workers, employed primarily by the local government. Approximately one in five works in an office/ administrative support position.", residential:"City Strivers residents live in densely populated, settled neighborhoods of major metropolitan areas, especially in New York City and Chicago. The home ownership rate is 31 percent. Nearly two-thirds of the households are located in the Northeast, with smaller concentrations in other regions of the United States. Approximately two- thirds of the households rent apartments in older, multi- unit buildings built before 1960. Small buildings with two to four units are more common in these neighborhoods. Because of their urban surroundings, many residents rely on public transportation; two in five households do not own a vehicle.", preferences:"The rental homes in City Strivers neighborhoods are moderately equipped with the essentials. The high cost of living and rent lowers discretionary income. Many residents carry renter's insurance. They shop at whole- sale clubs for most of their groceries, baby products, and children's essentials. They prefer accessible grocery stores such as Pathmark and Stop & Shop. A multitude of depart- ment and clothing stores is nearby. They eat fast food at White Castle, Popeyes, Checkers, and Dunkin' Donuts. Favorite stations include BET and cable movie channels such as Showtime, Cinemax, the Movie Channel, and Encore. They watch a lot of TV such as courtroom shows, talk shows, comedies, science fiction, boxing, and professional wrestling. They read music and bridal magazines and listen to urban, all-news, jazz, and variety radio. They attend professional football and basketball games, go to the movies, take trips to Atlantic City, and visit theme parks such as Six Flags. They also play tennis and basketball."},
    {selected:false, name:"Rooted Rural", id:46, demographic:"The population of the Rooted Rural segment is slightly older, with a median age of 43.7 years; 50 percent are older than age 55. Married-couple families dominate these rural neighborhoods; however, 23 percent are singles who live alone. More of the married-couple families are empty nesters than those who have children. There is little ethnic diversity in the Rooted Rural segment; almost 90 percent of the residents are white.", socioeconomic:"The median household income is $37,032. One-third of the households receive Social Security benefits. Although the agricultural industry is more prominent in this market than at the US level, many employed residents work in the service and manufacturing industry sectors. More than three in four people aged 25 or more have graduated from high school; 13 percent hold a bachelor's or graduate degree.", residential:"Although Rooted Rural neighborhoods are located in rural areas throughout the country, more than three-fifths of the households are found in the South. Housing types include single-family dwellings (70 percent of households) and mobile homes (26 percent). Home ownership is at 81 percent. Most of the housing units were built after 1970. A higher proportion of seasonal housing contributes to higher vacancy rates in these neighborhoods. Local residents tend to move infrequently.", preferences:"Rooted Rural residents are do-it-yourselfers. These settled families take pride in their homes and keep busy with home improvement and remodeling projects. They also take pride in their gardens, regularly buying lawn and garden insecticides, flower and vegetable seeds, and plants. Typical of their rural lifestyle, many have a lawn or garden tractor and ATVs and own an assortment of tools. They prefer domestic vehicles; most households own or lease a truck. Typically, a household member handles vehicle maintenance. Many homes have pets.When families eat out, they prefer Ryan's Family Steakhouse, but they generally prepare meals at home with fresh vegetables from their gardens. Many homes own a separate freezer to store their produce. They shop for groceries and buy their favorite Folger's coffee at Winn-Dixie, Piggly Wiggly®, or a Wal-Mart Supercenter. They hunt, fish, ride horseback, attend country music concerts, and go to car races. They read hunting and fishing magazines and listen to country music and auto racing on the radio. Many have a satellite dish so they can watch rodeo/bull riding, truck and tractor pulls, reality TV, auto races, and fishing programs as well as a variety of shows on CMT."},
    {selected:false, name:"Las Casas", id:47, demographic:"Las Casas residents are the latest wave of western “pioneers.” Nearly half were born outside the United States; 84 percent are Hispanic. Households are dominated by families, mainly married couples with children (42 percent) and single-parent families (21 percent). The median age is 27.7 years; approximately 50 percent are younger than age 30. The average household size of 4.32 is the highest of the Tapestry segments.", socioeconomic:"The median household income is $35,867. Most households derive their income from wages and salaries; some receive Supplemental Security Income or public assistance income. The service and manufacturing industry sectors provide most of the jobs for these residents. Many work part-time. Educational attainment levels are much lower than national levels. Fifty-two percent of the population aged 25-plus haven't graduated from high school; only 23 percent have attended college.", residential:"Las Casas neighborhoods are located primarily in California. Six in ten households rent. There is strong demand for housing in these neighborhoods; vacancy rates are lower than average. Housing is a mix of older apartment buildings, single-family dwellings, and townhomes. Most of the housing units were built before 1970.", preferences:"The large size of Las Casas households limits their discretionary income. The presence of children influences their spending habits. They live modest lifestyles. Many drive older vehicles. This is a strong market for purchases of baby and children's products. They typically shop for groceries at Ralphs, Vons, and the am/pm convenience store. They eat fast food at Carl's Jr., Del Taco, or Jack in the Box. Improving or remodeling their homes isn't important to them. Typically, households own one TV set and do not subscribe to cable. They watch daytime or sports programs on TV, particularly soccer and weight lifting. Hispanic radio is, by far, their favorite radio format; however, they also listen to variety and contemporary hit radio programs. They play soccer and baseball or go to the movies."},
    {selected:false, name:"Great Expectations", id:48, demographic:"Young singles who live alone and married-couple families dominate the Great Expectations market, although all household types are represented. The median age is 33.1 years. Some residents are just beginning their careers or family lives. Compared to the US figures, this segment has a higher proportion of residents who are in their 20s and a higher proportion of householders younger than 35 years. The ethnic diversity and racial composition of this segment are similar to US levels.", socioeconomic:"The median household income of $35,406 is lower than the US median of $50,227. Nearly half of the population aged 25 years and older has some postsecondary education; 18 percent hold a bachelor's or graduate degree. Most of the jobs come from the manufacturing, retail, and service industry sectors.", residential:"Great Expectations neighborhoods are located throughout the country, with higher proportions in the Midwest and South. Half own their homes; half rent. More than half of the households are single-family dwellings; approximately 40 percent are apartments in low- or mid- rise buildings. Most of the housing units in these older suburban neighborhoods were built before 1960.", preferences:"Great Expectations homeowners are not afraid to tackle smaller maintenance and remodeling projects, but they also enjoy a young and active lifestyle. They go out to dinner and to the movies. They do most of their grocery shopping at Wal-Mart Supercenters, Aldi, and Shop 'n Save. They throw Frisbees; play softball and pool; go canoeing; watch horror, science fiction, and drama films on DVD; and listen to country music, classic rock, and sports on the radio. They watch dramas, auto racing, and the evening news on TV. They occasionally eat at Arby's and Dairy Queen. They shop at major discount and department stores. They rarely travel. Focused on starting their careers, they're not investing for their retirement years."},
    {selected:false, name:"Senior Sun Seekers", id:49, demographic:"Growing at a rate of 1.7 percent annually, Senior Sun Seekers neighborhoods are among the fastest growing in the nation. Their median age is 51.8 years, the third oldest population of the Tapestry segments. More than 6 in 10 are aged 55 years or older. Married couples without children and singles comprise 70 percent of all households. This segment is not ethnically diverse; approximately 87 percent are white.", socioeconomic:"Many Senior Sun Seekers residents are retired or are anticipating retirement. The median household income is $35,560. More than half of the households receive Social Security benefits. Approximately one-third of the households also receive retirement income. Because a large proportion of the population is older, the education attainment is far lower than the US levels.", residential:"These neighborhoods are primarily in the South and West; 43 percent are in Florida. Escaping from cold winter climates, many Senior Sun Seekers residents have permanently relocated to warmer areas; others are “snowbirds” that move south for the winter. This market has the third highest proportion of seasonal housing of all the Tapestry segments. Favorite areas are in Florida, California, and Arizona. The home ownership rate is 77 percent. Single-family dwellings comprise almost half of the housing inventory; mobile homes comprise nearly 40 percent. Most housing was built after 1969.", preferences:"Senior Sun Seekers residents frequently take car trips and prefer to stay in reasonably priced motels or hotels such as Days Inn, Super 8, and Comfort Inn. They eat out frequently at family restaurants and fast-food establishments. They own all kinds of insurance including life, travel, long-term care, and personal liability. They consult with a financial advisor about their finances. They invest time and limited funds in home improvement projects such as painting and fencing the yard. Some enjoy gardening and working on their own landscaping projects. Many join veterans' clubs or fraternal orders and do charity work through these organizations. For health reasons, these seniors control their diet and take a variety of vitamins and dietary supplements. They will stop at nearby Circle K or Citgo Quik Mart convenience stores for a quick purchase. Satellite TV is part of their daily routine; they watch game shows, dramas, news programs, home improvement shows, sitcoms, and golf tourselected:false, naments. Favorite cable channels include CMT, TNT, and Turner Classic Movies. They also read fishing and hunting magazines, rent comedies on DVD, and occasionally listen to country radio. They also play bingo, visit theme parks, fish, and hunt."},
    {selected:false, name:"Heartland Communities", id:50, demographic:"Settled and close-knit, residents of Heartland Communities have a median age of 41.4 years. Approximately half of the residents have already retired, many in the same towns where they have lived and worked their whole lives. Nearly half are aged 55 years or older. Although married-couple families comprise nearly half of the household types and almost one-third are singles who live alone, other family types and shared housing are also represented. Children are found in 30 percent of the households. Diversity is minimal; nearly 9 in 10 residents are white.", socioeconomic:"The median household income is $34,088. Two-thirds of the households earn wage and salary income, and 39 percent receive Social Security benefits. Employed residents work in occupations ranging from management positions to unskilled labor jobs; many are employed in service industries. The percentage of the population aged 25 years or older that has completed high school is higher than the US level; the percentage that has attended college is far lower than the US figure.", residential:"Home to six million people, Heartland Communities neighborhoods are found primarily in small towns scattered across the Midwest and South. Low-density neighborhoods dominate, with older homes in urban clusters and rural, nonfarm areas. More than half of the housing units were built before 1960. Home ownership is at 67 percent. More than three-fourths of the housing is single-family dwellings.", preferences:"Heartland Communities residents invest time and money in their cherished homes and communities. They take pride in their gardening skills and in growing their own vegetables. Many homes own a riding lawn mower to keep up their relatively large lots. Residents tackle home improvement projects such as exterior painting and faucet replacement and shop at Ace Hardware or Lowe's. Many residents order items from catalogs, QVC, and Avon sales representatives. They also shop at Wal-Mart or Kmart and buy groceries at Wal-Mart Supercenters. Favorite restaurants include Golden Corral and Cracker Barrel. The residents in this segment rarely travel by plane. Heartland Communities residents have a distinctly country lifestyle. They go hunting and fishing. They also read gardening, fishing, and hunting magazines and listen to country music and auto races on the radio. Reading two or more Sunday newspapers is important to them. Some join fraternal orders or religious clubs and even get involved with local politics. Many Heartland Communities households subscribe to cable and usually watch news programs and movies on TV."},
    {selected:false, name:"Metro City Edge", id:51, demographic:"Married couples, single parents, and multigenerational families are the household types found in Metro City Edge neighborhoods. Grandparents are caregivers in 4 percent of these households, twice the US rate. The median age of this segment is 30.8 years because of the children, including adult children who still live at home. The average family size of 3.5 is slightly higher than the US average. Seventy-two percent of the residents are black; 17.3 percent are white; and 4 percent are American Indian—four times the US level.", socioeconomic:"The median household income for this segment is $29,269. Although 78 percent of households derive income from wages and salaries, 9 percent receive public assistance and 9 percent receive Supplemental Security Income. Nearly half of employed residents work in service industries. One in ten residents aged 25 years or older have a bachelor's or graduate degree; four in ten have attended college.", residential:"Metro City Edge residents live in older suburban neighborhoods of large metropolitan cities, primarily in the Midwest and South. Sixty-eight percent live in single- family homes; 14 percent live in buildings with two to four units. The home ownership rate is 49 percent. Although home prices are relatively inexpensive, many families are young, unsettled, and still renting. Seventy percent of the housing units were built before 1970.", preferences:"Metro City Edge residents must spend their money wisely to ensure the welfare of their children. They tend to shop for groceries at Piggly Wiggly, Kroger, and Aldi but will go to superstores and wholesalers for bulk purchases of household and children's items. Some will have their vehicles serviced at auto parts chains. They eat at fast- food or family-style restaurants such as Old Country Buffet or Ryan's. They watch sitcoms, movies, news programs, courtroom shows, and sports such as pro wrestling on TV. Accessing the Internet at home isn't important. They go to the movies and professional football games and play basketball. They read music and baby magazines and listen to urban and contemporary hit radio."},
    {selected:false, name:"Inner City Tenants", id:52, demographic:"Inner City Tenants residents are a microcosm of urban diversity; their population is represented primarily by white, black, and Hispanic cultures. Three in ten residents are Hispanic. This multicultural market is younger than average, with a median age of 28.8 years. The household composition also reflects their youth. Household types are mixed; 34 percent are singles, 28 percent are married-couple families, 21 percent are single parents, and 10 percent share housing. Turnover is high in these neighborhoods because many are enrolled in nearby colleges and work part-time. These neighborhoods are also a stepping-stone for recent immigrants, with an annual population growth of 0.6 percent.", socioeconomic:"The median household income is $30,873. Because few own their homes, most of their net worth comes from savings. Eighty-three percent earn income from wages and salaries; 7 percent receive public assistance. Forty-five percent of the population aged 25 and older has attended college; 5 percent hold a graduate or professional degree. Earning a college degree is at the forefront of their goals, so many work part- and full-time to fund their college education. Approximately half of the employed residents work in white-collar occupations. This market has twice the national level of residents who work in the accommodation/food services industry.", residential:"These neighborhoods are located primarily in the South and West. Most Inner City Tenants residents rent economical apartments in mid- or high-rise buildings. One-fifth of the housing is owner-occupied. Most of the housing units were built in the 1960s, 1970s, and 1980s. For their average commute to work of 25 minutes, many residents drive their vehicle or depend on other modes of transportation. Seventeen percent of the households do not own a vehicle.", preferences:"With their busy lifestyle, Inner City Tenants residents frequently eat at fast-food restaurants and shop for groceries at nearby stores such as Albertson's. They prefer easy-to-prepare frozen and canned foods. Internet access at home is not typical in this market, but those who have no access at home will surf the Internet at school or at the library. Playing games and checking e-mail are typical online activities. Households have recently bought video game systems and baby items such as food, products, furniture, and equipment. They prefer to shop at Target and Walgreens. They go to the movies and professional football and basketball games, play football and basketball, and go bowling. They read magazines, particularly news and Entertainment Weekly, and listen to urban or contemporary hits radio. Some enjoy the nightlife, visiting bars and going dancing at nightclubs."},
    {selected:false, name:"Home Town", id:53, demographic:"Home Town households are a mix of married-couple families, singles who live alone, and single-parent families. With a median age of 33.8 years, this is a slightly younger market than the United States as a whole. However, one in three is aged 65 years or older. Many families encompass two generations who have lived and worked in the community; their children plan to do the same. Seventy-two percent of the residents are white; 15 percent are black.", socioeconomic:"The median household income is $29,688. Although 73 percent of households derive income from wages and salaries, some rely on Supplemental Security Income and public assistance for support. The manufacturing, retail trade, and service industry sectors are the primary sources of employment for these residents. Overall, educational attainment is lower for Home Town than for the United States. Only 8 percent hold a bachelor's or graduate degree; 34 percent have attended college.", residential:"Change is rare in these low-density, settled neighborhoods, located primarily in the Midwest and South. Home Town residents may move from one house to another, but they seldom cross the county line. Seventy- three percent of homes are single-family dwellings, and 11 percent are two- to four-unit structures. Home ownership is at 54 percent. The average gross rent is two- thirds of the US average. Because the population in these neighborhoods hardly grows, new construction is scarce. Most of the housing was built before 1970.", preferences:"Home Town residents savor their quasi-country lifestyle by spending time outdoors fishing and playing football. Indoors, they play video games or watch TV favorites such as courtroom programs, wrestling, or reality shows. Internet access and cell phone use are less important here than in other markets. They shop for groceries at Kroger, Aldi, and Wal-Mart Supercenters. They buy clothes at discount department stores such as Wal-Mart and Kmart, typically located in small local malls. When they eat out, they go to Bob Evans and Ryan's family restaurants or fast-food places."},
    {selected:false, name:"Urban Rows", id:54, demographic:"The Urban Rows population of approximately 1.1 million people, the smallest of all the Tapestry segments, is still shrinking due to urban renewal programs. The median age is 32.5 years. Household types include married couples, single-parent families, and other families. Grandparents are caregivers in many households; many homes are multigenerational. Nearly 7 in 10 residents are black, and 2 in 10 are white. Twelve percent of the population is Hispanic.", socioeconomic:"The median household income is $30,698. Some households supplement their wage and salary income with Supplemental Security Income or public assistance. Nearly half of the employed residents work in white-collar occupations. Approximately 20 percent of the employed residents work in the health care industry; 10 percent have local government jobs. Educational attainment is below the US level; 33 percent of the residents have attended college versus half of the US population aged 25 years or older who have attended college.", residential:"These neighborhoods are primarily in the Northeast, with a much smaller concentration in the South. Two- thirds of the households are in Pennsylvania; one-fifth are in Maryland. Row houses and single-family dwellings comprise 76 percent of the households in Urban Rows. These homes are characteristic of housing in large, mid-Atlantic cities such as Philadelphia and Baltimore. Built decades ago, 52 percent of Urban Rows houses are owner occupied. Gentrification is beginning, although the housing vacancy rate of 19 percent in these neighborhoods is still higher than the US rate. Most housing units were built before 1950. Many residents rely on public transportation; 14 percent commute an hour or more to work. Forty-one percent of households do not own a vehicle, and 41 percent own only one vehicle.", preferences:"Because many homes have been in the family for generations, very few households hold a mortgage. Relatively few homes have air conditioning or central heat- ing; others rely on separate room air conditioners, ceiling fans, and space heaters. They shop regularly for groceries at Giant or the local Wawa for convenience items. Because Internet access is not widespread in Urban Rows neighborhoods, most residents go online at school or the public library. Many prefer satellite TV to cable. They watch a lot of daytime TV shows, sitcoms, and sports programs. Music is a big part of their daily lives. They download music from the Internet, read music magazines, and listen to urban and contemporary hit radio. They get their news from the tabloids and radio. They rarely eat out but enjoy going to the movies. Big basketball fans, they play and attend professional games when they can. They also play football."},
    {selected:false, name:"College Towns", id:55, demographic:"With a median age of 24.4 years, College Towns is the third youngest of all the Tapestry segments. Most residents are aged between 18 and 34 years and live in single-person or shared households. One-fourth of households are occupied by married-couple families. The race profile of this market is somewhat similar to the US profile. Approximately three-fourths of the residents are white.", socioeconomic:"College Towns residents are focused on their education; 59 percent are enrolled in college or graduate school. After graduation, other residents stayed on to teach or do research. Because many students only work part-time, the median household income of $32,360 ranks near the low end. Most of the employed residents work in the service industry, holding on- and off-campus jobs in educational services, health care, and food preparation.", residential:"One in seven College Towns residents lives in a dorm on campus. Students in off-campus housing live in low- income apartment rentals. Thirty percent of housing is owner-occupied, typically by town residents, who live with their families in single-family dwellings. One-third of the housing is single-family structures.", preferences:"Convenience dictates food choices; they usually buy ready-made, easy-to-prepare, or frozen meals, frozen pasta, pizza crusts, and peanut butter and jelly at the closest grocery store. With their busy lifestyles, they frequently eat out or order in from fast-food restaurants, particularly McDonald's, Wendy's, and pizza outlets during the week; however, many cook at home over the weekend. They buy books online and in stores. They have student loans and bank online or by ATM. These computer-savvy students own laptop computers or expensive desktop personal computers and the peripherals to match. Connecting to the Internet is essential; they go online to research assignments, look for jobs, check e-mail, and download music. Keeping in touch is also important; they buy and use cell phones and accessories. New to living on their own, many College Towns residents purchase bedding, bath, and cooking products. They own few appliances but, at a minimum, have a microwave oven, a toaster, and an upright vacuum cleaner. Their lifestyle is very casual. They rank high for participating in nearly every outdoor sport and athletic activity. College Towns residents attend country music and rock concerts and college basketball and football games, play pool, and go to movies and bars. They also participate in public activities including fund-raising and volunteer work. They usually listen to alternative music on their MP3 players, tune in to public radio, and watch MTV and Comedy Central on cable TV. They shop at discount stores but prefer to buy branded clothes from Old Navy, Gap, and Target."},
    {selected:false, name:"Rural Bypasses", id:56, demographic:"The age and household composition of the Rural Bypasses market is very similar to US distributions. Half of the households consist of married-couple families, 15 percent are single parent families, and 7 percent are other family types. One-fourth of the households consist of a single person. The median age for this segment is 39.6 years, near the US median of 37.2 years. Fifty-eight percent of the residents are white; 35.5 percent are black.", socioeconomic:"The median household income is $27,231. Wages and salaries provide the primary sources of income; however, many depend upon Social Security, Supplemental Security Income, and public assistance for support. Overall, two in three residents aged 25 years and older have graduated from high school; the population with a bachelor's degree is one-third that of the US level. Employed residents work in a variety of occupations, with a slightly higher percentage in blue-collar occupations. Higher- than-average proportions of employed residents work in the agricultural, mining, manufacturing, and construction industry sectors.", residential:"Open space, undeveloped land, and farmland are found in Rural Bypasses neighborhoods, located almost entirely in the South. Families live in small towns along country back roads. Residents enjoy the open air in these sparsely populated neighborhoods. Most houses are modest, single-family dwellings; 30 percent are mobile homes. Home ownership is at 73 percent. Most housing in this market was built after 1969.", preferences:"Typical of their country lifestyle, Rural Bypasses residents prefer to drive trucks and SUVs and listen to country radio. To save money, they eat at home and maintain their homes and gardens themselves. In areas with no cable access, some residents install satellite dishes to watch TV. They frequently watch sports on TV, NASCAR and other auto races, college football games, and fishing programs. They read fishing and hunting magazines. Conservative with their long-distance calls, resident demand for cost-effective cellular services is growing. They shop at discount stores, preferably at Wal-Mart. They also order from catalogs and from their Avon representatives. They shop at home improvement stores such as Lowe's and fill prescriptions at the local Wal-Mart Pharmacy instead of regular pharmacies. This is the top Tapestry segment to own and/or buy new motorcycles."},
    {selected:false, name:"Simple Living", id:57, demographic:"With a median age of 39.7 years, this market is slightly older than the US median of 37.2 years. Approximately one-fifth of Simple Living residents are aged 65 years or older; 12 percent are aged 75 or older. Half are singles who live alone or share housing; 32 percent are married- couple families. Young families with children and ethnic cultures are in the minority; most residents are white. This market size is stable with negligible growth.", socioeconomic:"The median household income is $27,284. Nearly 40 percent of households collect Social Security benefits, 8 percent receive Supplemental Security Income, and 6 percent receive public assistance. Over the years, residents have built equity in their homes and saved their hard-earned dollars. Most residents who are employed work in the health care, retail trade, manufacturing, educational services, and accommodation/food services industry sectors. Overall, 36.4 percent of residents aged 25 years and older have graduated from high school. Only 15 percent hold a bachelor's or graduate degree.", residential:"Simple Living neighborhoods are in the urban outskirts or suburbs throughout the United States. Residents live in older housing; 62 percent were built before 1970. More than half of them rent. Forty-two percent of housing is single-family dwellings, and 47 percent is in multiunit buildings of varying stories. Some seniors live in congregate housing (assisted living). Twenty-two percent of households do not own a vehicle; 45 percent own only one vehicle. Workers benefit from an average commute time to work of 20 minutes.", preferences:"The lifestyle of these residents is reflected by their ages; younger people go to nightclubs and play musical instruments; seniors refinish furniture and go saltwater fishing. Community activities are also important to the latter; they join fraternal orders and veterans' clubs. Simple Living households spend wisely on a restricted budget. They buy the essentials at discount stores and occasionally treat themselves to dinner out and a movie. Cable TV is a must for these frequent viewers of family programs, news programs, and game shows. They are big fans of daytime TV. Owning a personal computer, cell phone, or DVD player isn't important."},
    {selected:false, name:"NeWest Residents", id:58, demographic:"Hispanic cultures dominate this family oriented segment; three-quarters of the population is Hispanic. With 4.1 people, the NeWest Residents segment household has the third largest family size of all the Tapestry segments. Families dominate this market. Children live in 54 percent of the households, in married-couple or single-parent families. Another 19 percent are married-couple families with no children living at home and other family types. The median age is 27.3 years. Dependent children are 36 per- cent of the population; more than one-third is younger than age 35. Approximately half of this young population is foreign born, more than half of whom have arrived in the United States in the last 10 years. Forty percent of the residents are white, 40 percent defined as other races, and 6 percent are multiracial populations. NeWest Residents is one of the most diverse of the Tapestry segments.", socioeconomic:"Most NeWest Residents are not only new to the United States, they're also building their careers and starting their families. They arrived in the country with few funds but have begun to save their hard-earned dollars. Language is a significant barrier for many; this segment has the highest concentration of households who speak a language other than English. Forty-nine percent of residents aged 25 years and older have not completed high school. Lack of education limits their employment options. Most employed residents work in service and skilled labor jobs. Higher-than-average proportions of employed residents work in the construction, manufacturing, accommodation/ food services, administrative services, other services, and agricultural industry sectors. Some households receive Supplemental Security Income or public assistance. The median household income for this segment is $26,983.", residential:"Most NeWest Residents rent apartments in mid- or high-rise buildings in major cities, chiefly in the West and South. California has the largest concentration of households, followed by Texas. The average gross rent is 15 percent below the US level. Most housing units in these neighborhoods were built before 1980. Home ownership is at 17 percent.", preferences:"Putting their children first, NeWest Residents lead a strong, family-oriented lifestyle that emphasizes buying groceries and baby and children's products. They usually buy only the essentials such as baby food, baby supplies, baby car seats, and children's clothing. They shop for groceries at Vons and Ralphs but will stop at local convenience stores for milk, juice drinks, and nonprescription drugs. To save money, they prepare meals from scratch at home; however, they still enjoy eating occasionally at fast-food restaurants such as Carl's Jr. and Del Taco. They pay with cash; few have or use credit cards. Because most of them rent, they don't garden or buy big-ticket furniture pieces. Few have Internet access; they own one TV set and don't consider cable TV a necessity. To help their children become more fluent in English, parents will buy word and sound games. In their free time, they read magazines. Soccer is part of their culture; they watch it on TV, play it, and attend matches. They listen to Hispanic radio."},
    {selected:false, name:"Southwestern Families", id:59, demographic:"A mix of family types comprise 80 percent of the households in Southwestern Families neighborhoods. These young families form the foundation of Hispanic life in the Southwest. Children are the center of these households that are composed mainly of married couples with children and single-parent families. The average family size is 3.97, the fourth largest among all the Tapestry Segmentation. The rest of the households in these neighborhoods are married couples with no children living at home and other families. Grandparents are caregivers in some of these households. The median age of this young market is 29.2 years. Ethnic diversity is high; 83 percent of the residents are Hispanic. Diversity is also evident in the 28 percent of foreign-born residents who immigrated before 1990. Fifty-six percent of the residents are white, 30 percent are of other race populations, and 5 percent are American Indian populations. At five times the US level, Southwestern Families has the highest percentage of American Indian population of the Tapestry segments.", socioeconomic:"The median household income for this segment is $26,058. They carefully budget their income month to month to pay for the upkeep of their homes and families. Ten percent receive Supplemental Security Income; 10 percent receive public assistance. Recent arrivals and older generations are language-isolated. Educational attainment levels are low; nearly 50 percent of residents aged 25 years and older have not graduated from high school. Most employed residents work in blue-collar and service jobs. Higher-than-average proportions of employed residents work in the construction, accommodation/food services, administrative and other services, agricultural, and mining industry sectors.", residential:"As the segment selected:false, name implies, Southwestern Families communities are located almost entirely in the Southwest; 72 percent of these households are in Texas. Home ownership is important to these settled, suburban folks; more than two-thirds own their homes. Residents live in small, modest, primarily single-family homes. Eleven percent live in mobile homes in rural, nonfarm areas.", preferences:"Southwestern Families residents frequently buy baby and children's products such as disposable diapers and infant formula. To record family events, many will buy cameras. They buy clothes and occasionally shop for groceries at discount stores. Many also fill prescriptions there or at Walgreens and Wal-Mart. They shop for groceries at Albertson's, Kroger, and Vons. They buy used cars; car- savvy residents will fix and replace old car parts such as shocks, struts, and mufflers. Cable subscriptions are low even though service is available. When they buy a TV, they will choose a large- screen TV—42” and bigger. They listen to Hispanic and contemporary hits radio. TV and radio are the best media to reach them instead of newspapers or magazines."},
    {selected:false, name:"City Dimensions", id:60, demographic:"Diversity in household type and ethnicity characterizes City Dimensions neighborhoods. Most of these residents are young, with a median age of 29.5 years. Households are a mix of types; most are singles who live alone (31 percent), married-couple families (30 percent), and single-parent families (23 percent). Ethnic diversity is high. Nearly half of the residents are white and one-fourth are black; however, higher-than-average proportions of other race populations are also represented. Three in ten residents are of Hispanic origin.", socioeconomic:"The median household income is $26,283. Ten percent of the households receive Supplemental Security Income; 11 percent receive public assistance. Employed residents work full-time or part-time, primarily in the service, manufacturing, and retail trade industry sectors. Overall, 35 percent of residents aged 25 years and older have graduated from high school; 9 percent hold a bachelor's or graduate degree.", residential:"Although City Dimensions neighborhoods have a mix of housing types, more than half of the residents rent apartments in multiunit buildings. Most of the real estate is older; approximately 70 percent of the housing units were built before 1960; 42 percent are pre-1940 structures. Average gross rent in these older buildings is 17 percent below the US average. Housing types are split between single-family homes and apartments in two- to four-unit buildings. Although most households have a vehicle, residents seek jobs near their homes, commuting an average of 22 minutes to work.", preferences:"City Dimensions residents watch cable TV often, preferring movies and news programs to documentaries. Most households own more than one television set. They also like gaming systems. Residents are big-time sports fans and loyal team supporters; this is a top market for buying and wearing sports team clothes. Because few homes are equipped with central air conditioning, they rely on room air conditioners if necessary. Many have recently moved, so they bought household furnishings such as area rugs and sofas. Families with children spend wisely for children's and baby products, preferring to shop at discount stores. They use store brands, particularly for expensive items such as disposable diapers. Households that own vehicles prefer domestic cars and buy used vehicles. If they have automotive repair expertise, they service their own cars; others rely on the car dealership or a nearby garage. They eat out and go to the movies."},
    {selected:false, name:"High Rise Renters", id:61, demographic:"High Rise Renters residents are a diverse mix of race and ethnicity. More than half of the residents are Hispanic, mainly from Puerto Rico or the Dominican Republic. Forty percent of the residents are black, 21 percent are white, and 7 percent are of two or more races. A higher-than- average proportion (28 percent) of other races is also represented. Many residents speak a language other than English. Household types are mainly single parent and single person; however, a higher-than-average proportion of other family households is also present. Their median age of 31.8 years is younger than the US median. The presence of young children, adult children, and other relatives, including grandparents, boosts the average family size of 3.53, somewhat higher than the US average.", socioeconomic:"Most employed residents work in service, professional, and office/administrative support occupations. Higher- than-average proportions of employed residents work in the service and transportation industries. Twelve percent of employed residents work for the local government. The median household income is $23,377. Because of high unemployment, some residents might receive public assistance and Supplemental Security Income for support. Because so many must care for children at home, part-time workers are just as prevalent as full-time employees. Elementary and high school enrollment in these communities is above average. Nearly 30 percent of residents aged 25 years and older have graduated from high school, 20 percent have attended college, and 10 percent hold a bachelor's or graduate degree.", residential:"These communities are located almost entirely in the Northeast; 86 percent of these households are in New York. High Rise Renters has the highest population density of the Tapestry segments; there are 43,000 people per square mile. Residents live in mid- and high- rise apartment buildings; 41 percent live in 50-plus unit buildings. These rental units have below average vacancy rates, with an average gross rent 21 percent below the US average. Thirty percent of the housing units were built before 1940, twice the US level. Lack of parking and funds prevent three-fourths of the households from owning a vehicle; most rely on public transportation. The average commuting time to work is 41 minutes, the longest travel time among all the Tapestry segments.", preferences:"They watch cable TV often, particularly prime-time news programs and movies. Professional basketball is their favorite sport to watch on TV. Digital cable is popular because of its wide availability. To reach these residents, TV and radio are more effective than newspapers. They listen to urban, Hispanic, all-news, and variety radio. Internet access or owning a personal computer is unusual; those who have Internet access will download music. They shop for groceries at their local Albertson's and Stop & Shop. They buy household items and apparel at discount stores and affordable department stores and will also search the clearance racks at Macy's. They do not dine out regularly; even their fast-food purchases are limited. They buy necessary baby and children's clothes; however, tight budgets limit their spending."},
    {selected:false, name:"Modest Income Homes", id:62, demographic:"Eighty-three percent of the residents in Modest Income Homes neighborhoods are black. Single-person and single-parent household types are predominant; however, a higher-than-average proportion of other family households is also present. The median age of 36.1 years is a year younger than the national median of 37.2. Many adult children still live at home. More than one-fourth are aged 65 years or older and have retired. Many are caregivers for their grandchildren, demonstrating strong family ties in these neighborhoods.", socioeconomic:"Most of the retirees in Modest Income Homes rely on Social Security benefits for support. Slightly more employed residents work part-time than full-time, mainly in service and blue-collar occupations. The median house- hold income is $20,567. Thirteen percent of households receive Supplemental Security Income, and 10 percent receive public assistance. With little savings, home equity contributes the lion's share to a household's net worth in these neighborhoods. More than 60 percent of residents aged 25 years and older have graduated from high school. Eight percent hold a bachelor's or graduate degree, and 28 percent have attended college.", residential:"Most Modest Income Homes neighborhoods are in older suburbs of Southern metropolitan areas, with a smaller concentration in the Midwest. More than two-thirds of the housing is single-family dwellings; 15 percent are duplexes. Homeowners and renters are almost evenly divided. Seventy-one percent of the households own at least one vehicle. Because demand for housing is low, home prices are very moderate.", preferences:"Residents are big fans of daytime and primetime TV. They go to the movies occasionally and also like to watch movies on TV channels such as the Lifetime Movie Network and The Movie Channel. They also watch football and basketball games on TV. They listen to urban radio. The Internet is the least effective way to reach these folks. To save money, they shop at discount stores, limit their long-distance telephone calls, and restrict nonessential services such as Internet access and fitness center memberships. When they participate in physical activities, they might play basketball. Most drive used domestic sedans."},
    {selected:false, name:"Dorms to Diplomas", id:63, demographic:"With a median age of 21.9 years, Dorms to Diplomas residents are college students who are the youngest of the Tapestry segments. Seventy-nine percent of the residents are enrolled in a college or university. Forty-two percent share housing with one or more roommates; 38 percent live in single-person dwellings. Ethnic diversity is slightly lower in this segment than in the United States. Seventy-one percent of the residents are white; 10 percent are black. Although there is a higher percentage of Asians, Hispanics have a lower percentage compared to the United States.", socioeconomic:"To support themselves while they attend school, nearly three-fourths of the employed residents work part-time in low-paying service jobs. The educational institutions at the center of these communities employ many residents, especially in the educational services, accommodation/ food services, and retail trade industry sectors. The median household income for this segment is $24,047. Fifty-five percent of the residents aged 25 years and older hold a bachelor's or graduate degree.", residential:"Forty-three percent of the residents in the Dorms to Diplomas communities live in dormitories on campus; the remainder rent apartments in multiunit buildings off campus. Ninety percent rent. Most of these communities are in urban locations or part of a major campus that is the core of an urban cluster.", preferences:"Spending patterns of Dorms to Diplomas residents reflect their carefree lifestyle and their focus on their education. When they do not eat at the dining hall or in one of the nearby fast-food restaurants, they use convenient prepared and frozen foods. Most individuals own or share a refrigerator and microwave. Owning a personal computer is a necessity; they prefer laptops. Internet access is available to all and used frequently to research school assignments, find employment opportunities, make travel plans, and keep in touch with friends and family. Most own cell phones, iPods, and digital cameras. They download music and share videos. They bank online. Aside from the exercise they get from participating in college sports and walking or jogging around campus, they work out at on-campus gyms. Favorite pastimes include playing football, basketball, volleyball, and practicing yoga. They eat low-fat, low-calorie food. They also attend rock concerts, go dancing, and go to the movies and the theater. Typical of dorm life, they spend time with friends watching sports and playing cards. Although they often shop at discount stores, they prefer branded clothing from American Eagle and Old Navy."},
    {selected:false, name:"City Commons", id:64, demographic:"Single-parent families or singles who live alone comprise most of these very young households. With a median age of 26.7 years, City Commons is one of Tapestry Segmentation's youngest segments. Approximately half of the households have children; some households are multigenerational, with adults still living at home or grandparents who provide child care. The average household size of 2.8 is higher than the national average. Since 2000, population in these areas has declined at 0.4 percent per year. These neighborhoods are not ethnically diverse; 81 percent of the population is black.", socioeconomic:"Thirty-one percent of the residents who work are employed in service occupations (twice the national level). Nineteen percent of the households are on public assistance; 13 percent receive Supplemental Social Security income. Overall, more than 60 percent of the residents aged 25 years and older have graduated from high school. Six percent hold a bachelor's or graduate degree; 22.8 percent have attended college. Because they have limited employment options, more residents work part-time than full-time. The median household income is $16,339.", residential:"City Commons neighborhoods are found in large metropolitan areas, mainly in the South and Midwest. More than three-fourths of the households rent. Sixty-three percent rent apartments in multiunit buildings, primarily with fewer than 20 units. One-fourth of the housing is single-family dwellings. Typical of a young renters' market, these residents are movers; nearly 50 percent have relocated within the last five years.", preferences:"City Commons residents buy baby and children's products, food, and clothing most frequently. They shop primarily at discount stores and occasionally at department stores. Most families enjoy eating at fast-food restaurants several times a month. For exercise, they take their children to nearby city parks and playgrounds. Occasionally, they go to basketball games. An annual travel destination is probably to a theme park. They watch daytime courtroom and talk show programs and primetime TV shows. They would rather go to the movies than rent films to watch at home. They buy game systems for their children and listen to urban radio."},
    {selected:false, name:"Social Security Set", id:65, demographic:"Four in ten householders are aged 65 years or older; the median age is 44 years. Most of them live alone. Somewhat ethnically diverse, Social Security Set neighborhoods are a blend of different racial groups; however, half of the residents are white and one-third are black and 18 percent are Hispanic.", socioeconomic:"Although Social Security Set residents live on very low fixed incomes, they have accumulated some wealth they can tap into now that they're retired. Their median house- hold income is $16,849. Eight percent of households rely on public assistance; 16 percent receive Supplemental Security Income. The service industry provides more than half of the jobs held by these employed residents. Overall, more than two-thirds of the residents graduated from high school. Thirty-seven percent attended college; 16 percent hold a bachelor's or graduate degree.", residential:"Located in large US cities, these communities are dispersed among business districts and around city parks. Most Social Security Set residents rent apartments in low- rent, high-rise buildings; a few elderly residents opt to live in congregate housing. Because more than half of these households do not own a vehicle, many residents rely on easily accessible public transportation.", preferences:"Limited resources somewhat restrict the activities and purchases of residents in Social Security Set neighborhoods. They shop at discount stores but prefer grocery stores close to home. Many depend on Medicare or Medicaid to pay their health care costs. They bank in person and pay cash when they shop. Many purchase renter's insurance. Most households subscribe to cable television; residents enjoy their daytime and prime time TV. They watch game shows, a variety of sports, and entertainment news shows. This high viewership provides an easy way to reach these residents. Avid newspaper readers, many will read two or more to stay current on sports and the news."},

  ]



var places = [];
var selected_places = [];


function neighborhoodsCtrl($scope, $http, $location, $routeParams, $timeout, $analytics){
  places = [];
  selected_places = [];
  $scope.pro = {
    devices:{iphone:true, android:true},
    use_devices:true,
    use_month_max:true,
    use_black_list:true,
    use_white_list:true
  }

  $scope.choices = true;
  $scope.sel_hood_ct = 1;
  $scope.customers = 45;

  $scope.neighborhoodFormat = function(value) { 
    if (value == 1) {
      return value.toString() + " neighborhood" 
    }
    return value.toString() + " neighborhoods" 
  }

  $scope.use_devices = false;
  $scope.load_step = 0;
  $scope.show_manual = false;
  select_nav(0);
  $scope.isCollapsed = true;

  $scope.page_name = 'Neighborhoods';
  $scope.address = $routeParams;
  $scope.advanced_mode = false;
  $scope.intro_pop = true;
  $scope.cpm = 10;
  $scope.show_max = false;
  $scope.adv_page = 0;
  $scope.show_close_but = false;

  $scope.premium_demos = premium_demos;
  $scope.all_segments = segments;
  $scope.life_modes = life_modes;



  // Start Ad Time Picker


  $scope.times = ['12:00','1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00' , '8:00', '9:00' ,'10:00', '11:00']
  $scope.parts = ['am', 'pm']
  $scope.zones = ['US/Pacific' , 'US/Eastern', 'US/Mountain', 'US/Central']

  $scope.change_start_time = function() {
	  // $http.post(host + '/resavestarttime/' + $routeParams.campaign_key, $scope.yelp).success(function(data) {
	  //   $scope.updated_start_time = true;
	  // }); 
  }

  $scope.tz_idx = 0;
  $scope.updated_start_time = false;
  $scope.tz_list = ['PST', 'MST', 'CST', 'EST']
	 
  $scope.change_tz = function() {
	$scope.tz_idx += 1;
	if ($scope.tz_idx > 3) {
		$scope.tz_idx = 0;	
	}
	$scope.yelp.schedule.tz = $scope.tz_list[$scope.tz_idx];
  }


  // End Ad Time Picker
  $scope.find_segment_color = function(segment) {
    for (var i in $scope.life_modes) {
      for (var p in $scope.life_modes[i].segments) {
        if ($scope.life_modes[i].segments[p] == segment.id) {
          return $scope.life_modes[i].color
        }
      }
    }
    return '#333333'
  }

  for (var i in $scope.all_segments) {
    $scope.all_segments[i].color = $scope.find_segment_color($scope.all_segments[i])
  }


  $scope.safeApply = function(fn) {
	  var phase = this.$root.$$phase;
	  if(phase == '$apply' || phase == '$digest')
	    this.$eval(fn);
	  else
	    this.$apply(fn);
  };

  $scope.remove_all_selections = function() {
  	while($scope.selected_places.length>0) {
  		remove_place_by_geoid($scope.selected_places[0].geoid)
  	}
  }

 //  $scope.loaded_campaign = function(data) {
    
 //    if (!data.hasOwnProperty('schedule')) {

	// var d = new Date();
	// d.setHours( 1 );
	// d.setMinutes( 0 );
	// //console.log('calling tz');

	// data.schedule = {start_time:d, tz:$scope.tz_list[$scope.tz_idx]}

 //    } else {

	// var d = new Date();
	// d.setHours( data.schedule.hours );
	// d.setMinutes( data.schedule.minutes );
	// //console.log('calling tz');

	// data.schedule.start_time = d;

	// data.tz_idx = $scope.tz_list.indexOf(data.schedule.tz);

 //    }


 //    // $scope.step = 2;
 //    // $scope.loading = false;
 //    // $scope.yelp_data = data;
 //    // //console.log('yelp data');
 //  }


 var stuff = '1000000000'.replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 //console.log(stuff)

 $scope.clear_map = function(){
    for (var i in places) {
      places[i].polygon.setMap(null);
    }
    places = [];
    selected_places = [];
 }


  $scope.load_pro = function() {
    // //console.log(data)
    $scope.we_are_pro = 1
    $scope.advanced_mode = false;

    // load block groups
    var geoids = []
    for (var i in $scope.locations) {
      geoids.push($scope.locations[i].geoid)
    }
    var seg = []
    for (var i in $scope.segments) {
      if ($scope.segments[i]) {
        var id = $scope.segments[i].id;
        if (id < 10) {
          id = '0' + id
        }
        seg.push('pop' + id)
      }
    }

    if (geoids.length == 0) {
    	geoids = ['usa']
        data = {geoids:['usa'], segments:seg}
    } 

    data = {geoids:geoids, segments:seg}

    $scope.clear_map();

    $scope.start_pro_loader();
    $scope.the_pro_data = data;


     geoid_str = geoids.join('-')
     segments_str = seg.join('-')
     $http.jsonp('http://192.110.161.26:8891/bygeoidandsegment?callback=JSON_CALLBACK' + '&geoids=' + geoid_str + '&segments=' + segments_str, data).success(function(data) {

        //console.log(data.length + ' neighborhoods loaded')

        var counter = 0;

        var max = (parseFloat($scope.pro.month_max)+10)/10;
        if ((isNaN(max)) || ($scope.pro.month_max == '')) {
        	max = 9999999999;
        }

        //console.log('max ' + max);

        for (var i in data){

          if (counter < max) {

	          var select_current_block = true;
	          var boundaries = make_points(data[i].polygon)
	          var center_pt = new google.maps.LatLng(parseFloat(data[i].location[0]), parseFloat(data[i].location[1]))

	          if (!place_exists(data[i].geoid)) {
	            //////console.log('created poly')
	            var poly = make_poly($scope, map, data[i], center_pt, boundaries, select_current_block);
	            poly.setMap(map);
	            places.push({'polygon':poly, 'data': data[i]})
	          } else {
	            select_place_by_geoid(data[i].geoid)
	          }

	          var bounds = find_boundaries(data)
	          map.fitBounds(bounds)

	          counter++;

          }


        }

        //var latLng = lat + ',' + lng
        var scope = angular.element("#neighborhoods").scope();
        $scope.places_loaded();

        $scope.show_close_but = true;
        $scope.adv_page = 0;

    });

  }

  $scope.hide_pro = function() {
    $scope.advanced_mode = false;
  }

  $scope.show_adv_page = function(idx) {

    ////console.log("go!!!")
    if (idx == 1) {
      $scope.loc_search = "";
    }
    $scope.adv_page=idx;

  }

  $scope.show_advanced_mode = function() {
    ////console.log('go pro!!!')
    $scope.advanced_mode=true;
  }

  $scope.start_pro_loader = function() {
    $scope.show_close_but = false;
    $scope.loading_map = true;
    $scope.load_step = 5;
  }

  $scope.start_load_steps = function() {
    $scope.show_close_but = false;
    $scope.loading_map = true;
    $scope.load_step = 0;
    $timeout($scope.show_step1, 8000);
  }
  $scope.show_step1 = function() {
    $scope.load_step = 1;
    $timeout($scope.show_step2, 6000);
  }
  $scope.show_step2 = function() {
    $scope.load_step = 2;
    $timeout($scope.show_step3, 6000);
  }
  $scope.show_step3 = function() {
    $scope.load_step = 3;
    $timeout($scope.show_step4, 6000);
  }
  $scope.show_step4 = function() {
    $scope.load_step = 0;
    $scope.loading_map = false;
  }

  $scope.fast_forward = function() {
    $scope.loading_map = false;
  }

  $scope.preselected = [

    {name:'FREE', num:1, discount:10.00, color:'#cecece', icon:'img/walking_icon.png'},
    {name:'LOCAL', num:15, discount:10.00, color:'#cecece', icon:'img/walking_icon.png'},
    {name:'TOWN', num:30, discount:10.00, color:'#efefef', icon:'img/happy_icon.png'},
    {name:'METRO', num:60, discount:10.00, color:'#cecece', icon:'img/driving_icon.png'},
    // {name:'BLACK', num:120, discount:100.00, color:'#cecece', icon:'img/driving_icon.png'},

  ];

  $scope.target_sel_hood_ct = $scope.sel_hood_ct;

  $scope.$watch('sel_hood_ct', function() {
  	 //console.log('sel_hood_ct ' + $scope.sel_hood_ct)
  }); 

  $scope.$watch('new_move', function() {
  	 ////console.log('new_move')
	$scope.select_blocks_by_num(false);
  }); 

  $scope.$watch('start_move', function() {
  	////console.log('start_move')
	$scope.select_blocks_by_num(true);
  }); 

  $scope.$watch('end_move', function() {
  	////console.log('start_move')
	$scope.select_blocks_by_num(false);
  }); 

  $scope.max_blocks = 150;

  $scope.move_blocks = function() {
      for (var i=0; i < $scope.max_blocks; i++) {

	      if (i < sel) {
	      	
	        add_selected_place(places[i].data)
	        places[i].polygon.setOptions({fillColor:places[i].polygon.life_color, strokeWeight:selected_stroke_weight, strokeColor:selected_stroke_color, fillOpacity:selected_opacity, strokeOpacity:selected_stroke_opacity})

	      } else {
	      	////console.log('removing: ' + i)
	        remove_place_by_geoid(places[i].data.geoid)
	        places[i].polygon.setOptions({fillColor:places[i].polygon.life_color, strokeWeight:stroke_weight, strokeColor:stroke_color, fillOpacity:opacity, strokeOpacity:stroke_opacity})
	      }

      }
  }

  $scope.select_blocks_by_num = function(obliterate) { 

  	if (places.length == 0) {
  		return;
  	}


  	var sel = parseFloat($scope.sel_hood_ct)

  	$scope.pre_sel_idx = -1;
  	for (var i in $scope.preselected) {
  		if ($scope.preselected[i].num == sel) {
  			$scope.pre_sel_idx = i;
  		} 
  	} 

  	if (obliterate) {

      for (var i in places) {

	      if (i < sel) {
	      	
	        add_selected_place(places[i].data)
	        places[i].polygon.setOptions({fillColor:places[i].polygon.life_color, strokeWeight:selected_stroke_weight, strokeColor:selected_stroke_color, fillOpacity:selected_opacity, strokeOpacity:selected_stroke_opacity})

	      } else {

	        remove_place_by_geoid(places[i].data.geoid)
	        places[i].polygon.setOptions({fillColor:places[i].polygon.life_color, strokeWeight:stroke_weight, strokeColor:stroke_color, fillOpacity:opacity, strokeOpacity:stroke_opacity})
	      
	      }
      }

  	} else {

      for (var i=0; i < $scope.max_blocks; i++) {

	      if (i < sel) {
	      	
	        add_selected_place(places[i].data)
	        places[i].polygon.setOptions({fillColor:places[i].polygon.life_color, strokeWeight:selected_stroke_weight, strokeColor:selected_stroke_color, fillOpacity:selected_opacity, strokeOpacity:selected_stroke_opacity})

	      } else {

	        remove_place_by_geoid(places[i].data.geoid)
	        places[i].polygon.setOptions({fillColor:places[i].polygon.life_color, strokeWeight:stroke_weight, strokeColor:stroke_color, fillOpacity:opacity, strokeOpacity:stroke_opacity})
	      
	      }
      }
  	}
  }

  $scope.select_blocks_and_close = function(idx) {
    // alert('select and close')
  	$scope.choices = false;
    // if(idx === 0){
    //   idx = 10
    // }
  	$scope.select_blocks(idx);
  }


  $scope.select_blocks = function(idx) {
    console.log('idx is =' + idx)
    console.log('selected places')
    console.log(selected_places)
    console.log(selected_places.length)

    if(selected_places.length === 0){
      console.log('selected places length is equal to zero')
      add_selected_place(places[0].data.geoid);
    }

    if ($scope.loaded_places.length > 0) {
      $('#overlay2').css('display', 'none');

      $scope.pre_sel_idx = idx;
      var sel = $scope.preselected[idx];
  	  $scope.target_sel_hood_ct = sel.num;

  	  // console.log('target: ' + $scope.target_sel_hood_ct )
  	  // console.log('current: ' + $scope.sel_hood_ct )
      
      for (var i in places) {
	      if (i > $scope.max_blocks) {
	          remove_place_by_geoid(places[i].data.geoid);
	          places[i].polygon.setOptions({fillColor:places[i].polygon.life_color, strokeWeight:stroke_weight, strokeColor:stroke_color, fillOpacity:opacity, strokeOpacity:stroke_opacity});
	      }
      }

      console.log('target: ' + $scope.target_sel_hood_ct )
      console.log('current: ' + $scope.sel_hood_ct )
      if($scope.target_sel_hood_ct == $scope.sel_hood_ct){
        //dont do anything...

      }else{
        if ($scope.target_sel_hood_ct > $scope.sel_hood_ct) {
          console.log('is sel_hood_ct greater?')
        	$scope.forward_block_path();
        }else{
          console.log('sel_hood_ct is not greater+++++')
        	$scope.reverse_block_path();
        }
      }
    }
  }

  $scope.block_path_delay = 25;

  $scope.forward_block_path = function() {
  	//console.log('before forward ' + $scope.sel_hood_ct)
  	var diff = $scope.target_sel_hood_ct - $scope.sel_hood_ct
  	if (diff > 5) {
  		$scope.sel_hood_ct = $scope.target_sel_hood_ct - (diff/2);
  	} else {
  		$scope.sel_hood_ct ++;
  	}
  	
  	//console.log('forward ' + $scope.sel_hood_ct)
  	if ($scope.sel_hood_ct < $scope.target_sel_hood_ct) {
  		$timeout($scope.forward_block_path, $scope.block_path_delay);
  	}
    for (var i=0; i < $scope.max_blocks; i++) {
      if (i < $scope.sel_hood_ct) {
        add_selected_place(places[i].data)
        places[i].polygon.setOptions({fillColor:places[i].polygon.life_color, strokeWeight:selected_stroke_weight, strokeColor:selected_stroke_color, fillOpacity:selected_opacity, strokeOpacity:selected_stroke_opacity})

      } else {
        remove_place_by_geoid(places[i].data.geoid)
        places[i].polygon.setOptions({fillColor:places[i].polygon.life_color, strokeWeight:stroke_weight, strokeColor:stroke_color, fillOpacity:opacity, strokeOpacity:stroke_opacity})
      }
    }
  }


  $scope.reverse_block_path = function() {
  	console.log('before reverse ' + $scope.sel_hood_ct)

  	var diff = $scope.sel_hood_ct - $scope.target_sel_hood_ct;
  	if (diff > 5) {
      $scope.sel_hood_ct = $scope.target_sel_hood_ct + (diff/2);
  	} else {
  		$scope.sel_hood_ct --;
  	}
  	if ($scope.sel_hood_ct> $scope.target_sel_hood_ct) {
  		$timeout($scope.reverse_block_path, $scope.block_path_delay);
  	}
    for (var i=0; i < $scope.max_blocks; i++) {
      if (i < $scope.sel_hood_ct) {
        add_selected_place(places[i].data)
        places[i].polygon.setOptions({fillColor:places[i].polygon.life_color, strokeWeight:selected_stroke_weight, strokeColor:selected_stroke_color, fillOpacity:selected_opacity, strokeOpacity:selected_stroke_opacity})

      } else {
        remove_place_by_geoid(places[i].data.geoid)
        places[i].polygon.setOptions({fillColor:places[i].polygon.life_color, strokeWeight:stroke_weight, strokeColor:stroke_color, fillOpacity:opacity, strokeOpacity:stroke_opacity})
      }
    }
  }

  $scope.new_locations = [
  ]

  $scope.locations = [
  ];

  $scope.demo_search = '';


  $scope.open = function () {
    $scope.deep_demo = true;
  };

  $scope.close = function () {
    $scope.closeMsg = 'I was closed at: ' + new Date();
    $scope.deep_demo = false;
  };

  $scope.opts = {
    backdropFade: true,
    dialogFade:true
  };

  $scope.submit_address = function(){
    //////console.log(host + '/c/index.html#/location/')
      $scope.loading_map = true;
      $scope.start_load_steps();
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode( { 'address': $scope.address_location}, function(results, status) {
        ////console.log(status)
        if (status == google.maps.GeocoderStatus.OK) {
          var address_lat = results[0].geometry.location.lat();
          var address_lng = results[0].geometry.location.lng();
          //////console.log(address_lat + " " + address_lng)
          map.setCenter(new google.maps.LatLng(parseFloat(address_lat), parseFloat(address_lng)))
          $scope.load_more_blocks();
      } else {
        alert('Sorry, Google could not find that address');
        $scope.loading_address = false;
        $scope.loading_map = false;
        $scope.$apply();
      }
    });
  }


  $scope.get_current_geo = function(){
    $scope.loading_places = true;
    $scope.loading_map = true;
    $scope.start_load_steps();
    if(geo_position_js.init()){
      geo_position_js.getCurrentPosition(success_callback,error_callback,{enableHighAccuracy:true});
      }
      else{
        alert("Sorry that isn't allowed on your device.");
      }

    function success_callback(p)
    {
      var address_lat = p.coords.latitude
      var address_lng = p.coords.longitude
      ////console.log('geo_lat='+p.coords.latitude +';geo_lon='+p.coords.longitude);
      //find_neighbors($scope.current_lat, $scope.current_lng)

      map.setCenter(new google.maps.LatLng(parseFloat(address_lat), parseFloat(address_lng)))
      $scope.load_more_blocks();
    }

    function error_callback(p)
    {
      alert('We had a problem: '+p.message);
    }

    }

  $scope.select_all_demos = function(bool) {

    for (var i in $scope.all_segments) {
      //////console.log('select all demos ' + bool)
      $scope.all_segments[i].selected = bool;
    }
  }

  $scope.filter_premium_demos = function(item) {
    if (item.selected) {
      return true;
    }
    return false;
  }

  $scope.remove_premium_demo = function(idx) {
    $scope.premium_demos.splice(idx, 1)
  }

  $scope.filter_demos = function(item) {
    if ($scope.demo_search.length == 0) {
      return true;
    }
    if (item.demographic.indexOf($scope.demo_search) > 0) {
      return true
    }
    if (item.name.indexOf($scope.demo_search) > 0) {
      return true
    }
    if (item.socioeconomic.indexOf($scope.demo_search) > 0) {
      return true
    }
    if (item.residential.indexOf($scope.demo_search) > 0) {
      return true
    }
    if (item.preferences.indexOf($scope.demo_search) > 0) {
      return true
    }
    return false;
  };

  $scope.select_new_demo = function(id) {
    ////console.log('select new demo!!')
    $scope.deep_demo = true;
    $scope.selected_demo = $scope.all_segments[id-1];
  }

  $scope.remove_demo = function(idx) {
    $scope.segments.splice(idx, 1);
  }

  $scope.show_meta_demo = function(idx) {
    $scope.deep_meta_demo = true;
    $scope.selected_meta = $scope.life_modes[idx];
  }

  $scope.select_meta_demo = function(idx, bool) {
    $scope.selected_meta = $scope.life_modes[idx];
    $scope.life_modes[idx].selected = bool;
    ////console.log('selecting seg ' + $scope.life_modes[idx].segments)
    for (var i in $scope.life_modes[idx].segments) {
      ////console.log('selecting seg ' + $scope.life_modes[idx].segments[i])
      $scope.all_segments[$scope.life_modes[idx].segments[i]-1].selected = bool;
    }
  }

  $scope.remove_meta = function(idx) {
    $scope.life_modes.splice(idx, 1);
  }

  $scope.close_demos = function() {
    var segs = [];
    ////console.log('close demos!')
    for (var i in $scope.all_segments) {
      if ($scope.all_segments[i].selected) {
        segs.push($scope.all_segments[i])
      }
    }
    $scope.segments = segs;
    $scope.adv_page = 0;
  }

  $scope.demo_desc = 0;

  $scope.segments = []

  $scope.selected_new_location = false;

  $scope.save_new_location = function() {
    if (!$scope.selected_new_location) {
      return;
    }
    $scope.adv_page = 0;
    for (var i in $scope.locations) {
      if ($scope.locations[i].geoid == $scope.selected_new_location.geoid) {
        return;
      }
    }
    $scope.locations.push($scope.selected_new_location);
  }

  $scope.remove_location = function(idx) {
    $scope.locations.splice(idx, 1);
  }

  $scope.autocomplete_scopes = 'cd112-county-state-maponics_city_mac-zipcode';

  $scope.searching = false;
  $scope.search_locations = function() {

    $scope.searching = true;
    ////console.log('searching ' + $scope.loc_search)
    $http.get(host + '/autocomplete/' + $scope.loc_search + '/' + encodeURIComponent($scope.autocomplete_scopes)).success(function(data) {
      $scope.searching = false;
      $scope.new_locations = data;

    });

  }

  $scope.current_map_poly = false;
  $scope.map2_loading = false;

  $scope.show_loc = function(idx) {
    $scope.adv_page = 1;
    $scope.selected_new_location = 1;
    $scope.map2_loading = true;
    $http.post(host + '/getboundary/', $scope.new_locations[idx].geoid).success(function(data) {
      $scope.load_loc(data);
      //console.log('DATA')
      //console.log(data)
    });
  }

  $scope.select_new_loc = function(idx) {
    $scope.selected_new_location = 1;
    $scope.map2_loading = true;
    //console.log('idx ' + idx)
    //console.log('total locs ' + $scope.locations.length)
    $http.post(host + '/getboundary/', $scope.new_locations[idx].geoid).success(function(data) {
      $scope.load_loc(data);
    });
  }

  $scope.load_loc = function(data) {

      $scope.selected_new_location = data[0];

      if ($scope.current_map_poly) {
        $scope.current_map_poly.setMap(null);
      }

      var boundaries = make_points(data[0].polygon)

      var center_pt = new google.maps.LatLng(parseFloat(data[0].location[0]), parseFloat(data[0].location[1]))

      var poly = draw_poly($scope, map, data[0], center_pt, boundaries);

      map2 = null;
      map2 = new google.maps.Map(document.getElementById("map2"), mapOptions);
      poly.setMap(map2);
      $scope.current_map_poly = poly;

      bbox = new google.maps.LatLngBounds(new google.maps.LatLng(data[0].bbox[1],data[0].bbox[0]), new google.maps.LatLng(data[0].bbox[3],data[0].bbox[2]));
      //map2.setCenter(center_pt)
      var mapOptions = {
              center: center_pt,
              zoom: 4,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              mapTypeControl: false
            };
      map2.setOptions(mapOptions);
      map2.fitBounds(bbox);
      $scope.map2_loading = false;

  }

  $scope.hide_over = function() {
    if ($scope.loaded_places.length > 0) {
      $scope.pre_sel_idx = 1;
      $('#overlay2').css('display', 'none');
      $scope.select_blocks(1);
    }
  }

  $scope.create_user_login = function() {
    $location.path('/signin/' + $routeParams.gae_key)
  }

  $scope.cont = function() {
  	// if ($scope.sel_hood_ct < 30) {
  	// 	$analytics.eventTrack('show_upsell', {category: 'upsell_funnel'});
  	// 	$scope.upsell_step = true;
  	// } else {
  	// 	$scope.upsell_step = false;
  	// }
  	$scope.upsell_step = false;
  	$scope.the_upsell = true;
  }

  $scope.select_walking = function() {
  	$scope.select_blocks(0);
  }
  $scope.select_happy = function() {
  	$scope.select_blocks(1);
  }
  $scope.select_driving = function() {
  	$scope.select_blocks(2);
  }

  $scope.upsell_free = function() {
  		$analytics.eventTrack('upsell_free', {category: 'upsell_funnel'});
  		$timeout($scope.select_walking, 250)
  		$scope.the_upsell = false;
  }

  $scope.upsell_walking = function() {
  			$analytics.eventTrack('upsell_walking', {category: 'upsell_funnel'});
  			$timeout($scope.select_walking, 250)
  			$scope.the_upsell = false;
  }

  $scope.upsell_happy = function() {
  			$analytics.eventTrack('upsell_happy', {category: 'upsell_funnel'});
  		$timeout($scope.select_happy, 250)
  		$scope.the_upsell = false;
  }

  $scope.upsell_driving = function() {
  			$analytics.eventTrack('upsell_driving', {category: 'upsell_funnel'});
  			$timeout($scope.select_driving, 250)
  			$scope.the_upsell = false;
  }


  $scope.skipping = false;


  $scope.save_neighborhoods = function() {

  	if ($scope.skipping) {
  		return;
  	}

  	$scope.the_upsell = false;
  	$scope.yelp.schedule.hours = $scope.yelp.schedule.start_time.getHours();
    $scope.yelp.schedule.minutes = $scope.yelp.schedule.start_time.getMinutes();
	$scope.yelp.schedule.end_hours = $scope.yelp.schedule.end_time.getHours();
    $scope.yelp.schedule.end_minutes = $scope.yelp.schedule.end_time.getMinutes();

    var geoids = []
    for (var i in selected_places) {
      geoids.push({'geoid':selected_places[i].geoid,
                  'domtap': selected_places[i].domtap,
                  'tapsegnam' : selected_places[i].tapsegnam,
                  'lifecode' : selected_places[i].lifecode})
    }

    $scope.yelp.geoids = geoids
    $analytics.eventTrack('selectneighborhoods', {category: 'checkout_funnel'});

    $http.post(host + '/saveneighborhoods/' + $routeParams.gae_key, $scope.yelp).success(function(data) {
	    $http.get('/logins/loginredirect?yelp_key='+$routeParams.gae_key).success(function(data){

	      if(data.status === 'success'){
	        var redirect_uri = data.data.redirect_uri;
	         location.href=redirect_uri;
	      }else{
	          $location.path('/signin/' + $routeParams.gae_key)
	      }
	    })
    });

  }

  $scope.save_advanced = function() {

    // $scope.yelp.targeting = {advanced:true, segments:$scope.segments, premium_segments:$scope.premium_demos, locations:$scope.locations};
    // $scope.yelp.targeting = selected_places;
    var geoids = []
    for (var i in selected_places) {
      ////console.log($scope.locations[i])
      geoids.push($scope.locations[i])
    }
    ////console.log('GEOIDS ' + geoids)
    $scope.yelp.geoids = geoids
    //console.log('Proness')
    //console.log($scope.yelp.pro)
    if ($scope.we_are_pro){
      //console.log('WE ARE PRO')
      $scope.yelp.pro = $scope.we_are_pro;
      $scope.yelp.pro_data = $scope.the_pro_data
    }
    $http.post(host + '/saveneighborhoods/' + $routeParams.gae_key, $scope.yelp).success(function(data) {
      $location.path('/signin/' + $routeParams.gae_key)
    });

  }

  $(document).mousemove(function(e){
    // ////console.log('moving1');
    // ////console.log($(document).width());
    // $('#overlay').css('position', 'absolute');
    //var width = $(document).width() / 2 - 990/2 ;

    //$('#overlay').css('top', e.clientY-140 + $(document).scrollTop()).css('left', e.clientX-80);

  });


  $scope.get_place_list = function() {

    var all = [];
    for (var place in selected_places) {
      all.push(place.geoid)
    }
    return all;

  }


  //START MAP
  $scope.start_load_steps();
  $scope.loading_map = true;

  var mapOptions = {
          center: new google.maps.LatLng(38, -97),
          zoom: 4,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl: false
        };

  var map = new google.maps.Map(document.getElementById("main_map"), mapOptions);
  var map2 = null;


  //START LOAD BLOCKS
   $scope.load_more_blocks = function(){

      var lat = map.getCenter().lat();
      var lng = map.getCenter().lng();

      $scope.loading_map = true;
      show_close_but = false;

      var load_number = places.length;
      $scope.find_neighbors(lat, lng, 2000, 'dont load first five', false);
      ////console.log(lat + ' and ' + lng);
    };

  $scope.find_neighbors = function(lat, lng, load_number, load_five, zoom){
    $scope.find_neighbors(lat, lng, load_number, load_five, zoom, false);
  }

  $scope.find_neighbors = function(lat, lng, load_number, load_five, zoom, select_all){

  	console.log('find neighgbors lat lng ' + lat + ' , ' + lng);
    $http.get(host + '/nearestneighbors/' + lat + '/' + lng + '/' + load_number + '/' + 'block_group' + '/True').success(function(data) {

        ////console.log(data.length + ' neighborhoods loaded')

        var counter = 0;

        for (var i in data){

          var select_current_block = false;

          if (load_five === 'load five'){
            counter++;
            if (counter <= 1){
              select_current_block = true;
            }
          }

          if (select_all) {
            select_current_block = true;
          }

          var boundaries = make_points(data[i].polygon)

          //////console.log('asdfasdfasdfasdfasdfasdfasdf' , data)
          //////console.log(data[i])

          var center_pt = new google.maps.LatLng(parseFloat(data[i].location[0]), parseFloat(data[i].location[1]))

          if (!place_exists(data[i].geoid)) {
            //////console.log('created poly')
            var poly = make_poly($scope, map, data[i], center_pt, boundaries, select_current_block);
            poly.setMap(map);
            places.push({'polygon':poly, 'data': data[i]})
          } else {
            //select_place_by_geoid(data[i].geoid)
          }

        }
        if (zoom) {
          var bounds = find_boundaries([data[0]])
          map.fitBounds(bounds)
          map.setZoom(map.getZoom()-1)

          // place marker on yelp data
          var marker = new google.maps.Marker({
            map:map,
            draggable:true,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng($scope.yelp.latitude, $scope.yelp.longitude)
          });
          google.maps.event.addListener(marker, 'click', $scope.toggleBounce);
        }

        var latLng = lat + ',' + lng
        var scope = angular.element("#neighborhoods").scope();
        $scope.places_loaded();

        $scope.show_close_but = true;
        //$scope.loading_map = false

      })

      .error(function() {alert('load error. please check your internet connection') })

  }

  $scope.toggleBounce = function() {

    if (marker.getAnimation() != null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }


  //START LOAD PLACES
  $scope.places_loaded = function() {
    console.log('places loaded +++++ selected place++++')
    console.log(selected_places)
    $scope.show_loading = false;
    $scope.loaded_places = selected_places;
    //$scope.$apply();
  }

  //START ADD PLACE
  $scope.place_added = function() {
    $scope.selected_places = selected_places
    $scope.number_zero = false;
    //$scope.sel_hood_ct = $scope.selected_places.length;
    if($scope.$$phase != '$digest' && $scope.$$phase != '$apply') {
      ////console.log('not in phase')
      $scope.$apply();
    }

  }

  //START REMOVE PLACE
  $scope.place_removed = function() {
    //////console.log('place removed ' + selected_places)
    $scope.selected_places = selected_places;
    //$scope.sel_hood_ct = $scope.selected_places.length;

    $scope.safeApply();
  }

  $scope.set_boundaries = function(data) {

    for (var i in data){

      var boundaries = make_points(data[i].polygon)

      //////console.log('asdfasdfasdfasdfasdfasdfasdf' , data)
      ////console.log(data[i])

      var center_pt = new google.maps.LatLng(parseFloat(data[i].location[0]), parseFloat(data[i].location[1]))

      if (!place_exists(data[i].geoid)) {
        ////console.log('created poly')
        var poly = make_poly($scope, map, data[i], center_pt, boundaries, true);
        poly.setMap(map);

        places.push({'polygon':poly, 'data': data[i]})
      }

    }

    var bounds = find_boundaries(data)
    map.fitBounds(bounds)
    map.setZoom(map.getZoom())
    $scope.places_loaded();
    $scope.loading_map = false;

  }

  $http.get(host + '/fetchyelp?key=' + $routeParams.gae_key).success(function(data) {

    $scope.yelp = data;

    // $scope.start_time = new Date($scope.yelp.schedule.start_time);
    // $scope.yelp.schedule.start_time = new Date($scope.yelp.schedule.start_time)

    // $scope.tz_idx = $scope.tz_list.indexOf($scope.yelp.schedule.tz);



    if ($scope.yelp.hasOwnProperty('geoids')) {
      var geoids = [];
      for (var i in $scope.yelp.geoids) {
        geoids.push($scope.yelp.geoids[i].geoid)
      }
      $scope.sel_hood_ct = geoids.length;
      for (var i in $scope.preselected) {
      	if ($scope.preselected[i].num == geoids.length) {
      		$scope.pre_sel_idx = i;
      	}
      }

      $http.post(host + '/mongodb/boundary', {geoids:geoids}).success(function(data){
        $scope.set_boundaries(data);
        $scope.load_more_blocks();
      });
    } else {
      console.log('lat lng ' + data.latitude + ' , ' + data.longitude);
      $scope.find_neighbors(data.latitude, data.longitude, 2000, 'load five', true);
    }

    if (!$scope.yelp.hasOwnProperty('schedule')) {

		var d = new Date();
		d.setHours( 9 );
		d.setMinutes( 0 );
		//console.log('calling tz');

		var d2 = new Date();
		d2.setHours( 17 );
		d2.setMinutes( 0 );
		//console.log('calling tz');


		$scope.yelp.schedule = {start_time:d, tz:$scope.tz_list[$scope.tz_idx], end_time:d2}
		//console.log($scope.yelp.schedule)
    } else {

    	//console.log($scope.yelp.schedule)
		var d = new Date();
		d.setHours( $scope.yelp.schedule.hours );
		d.setMinutes( $scope.yelp.schedule.minutes );
		//console.log('calling tz');
		var e = new Date();
		e.setHours( $scope.yelp.schedule.end_hours );
		e.setMinutes( $scope.yelp.schedule.end_minutes );

		$scope.yelp.schedule.start_time = d;
		$scope.yelp.schedule.end_time = e;

		$scope.yelp.tz_idx = $scope.tz_list.indexOf($scope.yelp.schedule.tz);
		//console.log($scope.yelp.schedule)
    }

  });

}


function draw_poly(scope, map, data, center_pt, boundaries) {

    var poly = new google.maps.Polygon({
        paths: boundaries,
        strokeColor: '#333333',
        strokeOpacity: .7,
        strokeWeight: 1,
        fillColor: '#FFD27F',
        fillOpacity: .9

    });

    return poly;

}

//START POLY MAP
function make_poly(scope, map, data, center_pt, boundaries, five) {
    var five = five;
    var name = data.name;
    var geoid = data.geoid


    var poly = new google.maps.Polygon({
        paths: boundaries,
        strokeColor: stroke_color,
        strokeOpacity: stroke_opacity,
        strokeWeight: 1,
        fillColor: poly_color,
        fillOpacity: opacity

    });

    //////console.log('making ' + name)

    poly.corner = boundaries[0];
    poly.name = name;
    poly.center = center_pt
    poly.geoid = geoid;
    poly.data = data;
    poly.sel = false;
    data.selected = false;
    var lifecode = 2;
    if (data.hasOwnProperty('lifecode')) {
      var lifecode = data.lifecode.substr(1);
      //////console.log('code ' + lifecode);
      if (lifecode == '') {
        lifecode = 2;
      }
    }

    poly.data.lifemode = life_modes[lifecode-1]

    if (poly.data.lifemode == null) {
    	poly.data.lifemode = life_modes[12]
    }
    poly.life_color = poly.data.lifemode.color;
    //////console.log('poly props set')
    var new_place = {'name': name, 'geoid': geoid, 'poly_idx': 'idx', poly:poly, selected:false}
    if (five === true){
      poly.data.selected = true;
      add_selected_place(data);
      poly.setOptions({fillColor:poly.life_color, strokeWeight:selected_stroke_weight, strokeColor:selected_stroke_color, fillOpacity:selected_opacity, strokeOpacity:selected_stroke_opacity})
      //poly.setOptions({fillOpacity: .4, fillColor:selected_color})
      poly.sel = true;
    } else {

      poly.setOptions({fillColor:poly.life_color, strokeWeight:stroke_weight, strokeColor:stroke_color, fillOpacity:opacity, strokeOpacity:stroke_opacity})
      //poly.setOptions({fillOpacity: .4, fillColor:poly.life_color})

    }


    google.maps.event.addListener(poly,"mouseover",function(){
      $('#overlay').css('display', 'block')

      scope.current_place = this;
      scope.place_data = this.data;
      var domtap = parseFloat(this.data.domtap.substr(3))
      var domlife = parseFloat(this.data.lifecode.substr(1))
      scope.mode_data = life_modes[domlife-1];

      if (domtap == 66) {
      	scope.mode_data = life_modes[12];
      }

      // //console.log('domtap ' + domtap)
      // //console.log('domlife ' + domlife)
      // //console.log(scope.mode_data)

      // for (var i in life_modes) {
      //   for (var p in life_modes[i].segments) {
      //     ////console.log('looking at segment ' + life_modes[i].segments[p] + ' for ' + scope.place_data.id)
      //     if (domtap == life_modes[i].segments[p]) {
      //       ////console.log('seleing mode ' + life_modes[i].name)
      //       scope.mode_data = life_modes[i];
      //     }
      //   }
      // }


      ////console.log('data name ' + this.data.name)

      if (is_place_selected(this.geoid)) {
      } else {
        this.setOptions({fillOpacity:over_opacity, strokeOpacity:over_stroke_opacity})
      }


      //this.marker.setVisible(true)
      scope.$apply();

    });

    google.maps.event.addListener(poly,"mouseout",function(){

      //$('#overlay').css('display', 'none')

      this.setOptions({fillColor:'#5938ff'})
      //this.marker.setVisible(false)

      if (is_place_selected(this.geoid)) {
        this.setOptions({fillColor:this.life_color,  fillOpacity:selected_opacity, strokeOpacity:selected_stroke_opacity, strokeColor:selected_stroke_color})
      } else {
        this.setOptions({fillColor:this.life_color, fillOpacity:opacity, strokeOpacity:stroke_opacity, strokeColor:stroke_color})
      }

    });


    var map_clicker = google.maps.event.addListener(poly,"click",function(){

        var check_place = is_place_selected(this.geoid);
        ////console.log(new_place)
        ////console.log('check place');
        ////console.log(check_place);
        if (check_place) {

          this.data.selected = false;
          ////console.log('you removed this block');
          remove_place_by_geoid(this.geoid);
          this.setOptions({fillColor:this.life_color, strokeWeight:selected_stroke_weight, fillOpacity:opacity, strokeOpacity:stroke_opacity, strokeColor:this.life_color})
          this.sel = false;

        } else {

          this.data.selected = true;
          ////console.log('you added this block')
          add_selected_place(this.data);
          this.setOptions({fillColor:this.life_color, strokeWeight:stroke_weight, fillOpacity:selected_opacity, strokeOpacity:selected_stroke_opacity, strokeColor:selected_stroke_color})
          this.sel = true;

        }

        var scope = angular.element("#neighborhoods").scope();
		scope.sel_hood_ct = selected_places.length;
        scope.pre_sel_idx = -1;
	  	for (var i in scope.preselected) {
	  		if (scope.preselected[i].num == scope.sel_hood_ct) {
	  			scope.pre_sel_idx = i;
	  		} 
	  	} 
        scope.$apply();

    });

    return poly;

}




//START REMOVE PLACE

function remove_place_by_geoid(geoid){
    for (var place_idx in selected_places) {
      if(selected_places[place_idx].geoid == geoid){
        remove_place(place_idx);
        return true;
      }
    }
}

function remove_place(idx) {

    //////console.log('removing ' + idx)
    var geoid = selected_places[idx].geoid;
    //$scope.remove_place_by_geoid($scope.selected_places[idx].geoid)
    //$scope.selected_places[idx].marker.setMap(null);
    selected_places.splice(idx, 1);


    // turn off selected place
    for (var i in places) {
      //////console.log('checking ' + $scope.places[i].polygon.geoid)
      //////console.log('vs ' + geoid)
      if (places[i].polygon.geoid == geoid) {
        places[i].polygon.setOptions({fillOpacity: .3, fillColor:places[i].polygon.life_color});
      }
    }

  var scope = angular.element("#neighborhoods").scope();
  scope.place_removed();

}


//END REMOVE PLACE
function select_place_by_geoid(geoid) {
    for (var place_idx in places) {
      if(places[place_idx].data.geoid == geoid){
        places[place_idx].polygon.setOptions({fillColor:places[place_idx].polygon.life_color, strokeWeight:selected_stroke_weight, strokeColor:selected_stroke_color, fillOpacity:selected_opacity, strokeOpacity:selected_stroke_opacity})
        add_selected_place(places[place_idx].data);
        return true;
      }
    }
}


//START ADD PLACE
function add_selected_place(obj) {
    //////console.log('add place')
    for(var i=0; i < selected_places.length; i++){
      if (selected_places[i].geoid == obj.geoid){
        //////console.log('place not added')
        return false;
      }
    }

    selected_places.push(obj)
    var scope = angular.element("#neighborhoods").scope();
    scope.place_added();

}

//END ADD PLACE



//START IS PLACE SELECTED

function is_place_selected(geoid) {
  for (var place in selected_places) {
    if (geoid == selected_places[place].geoid) {
      return true;
    }
  }
  return false;

}

//END IS PLACE SELECTED



function place_exists(geoid) {
  for (var p in places) {
    if (places[p].polygon.geoid == geoid) {
      return true;
    }
  }
  return false;
}


// START MAKE POINTS
function make_points(pt_arr){
    var boundaries = []
    for (var i in pt_arr) {

        var pt_list = pt_arr[i];
        var points = [];
        for (var i = 0; i < pt_list.length; i+=2) {
            points.push(new google.maps.LatLng(pt_list[i], pt_list[i+1]))
        }
        //points.push(points[0])
        boundaries.push(points);

    }

    return boundaries;
}
// END MAKE POINTS

//START FIND BOUNDARIES

function find_boundaries(data) {

        var s = data[0].bbox[1];
        var w = data[0].bbox[0];
        var n = data[0].bbox[3];
        var e = data[0].bbox[2];

        for (var box in data) {

        var bbox = data[box].bbox;
        if (bbox[1] < s) {s=bbox[1];}
        if (bbox[0] < w) {w=bbox[0];}
        if (bbox[3] > n) {n=bbox[3];}
        if (bbox[2] > e) {e=bbox[2];}

    }

    return new google.maps.LatLngBounds(new google.maps.LatLng(s,w), new google.maps.LatLng(n,e));

}
