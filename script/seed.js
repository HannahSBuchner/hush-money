'use strict'

const db = require('../server/db')
const {User, Toy} = require('../server/db/models')

const toys = [
  {
    name: 'The Ultimate Fort Builder',
    url:
      'https://www.lakeshorelearning.com/products/blocks-manipulatives/building-sets/the-ultimate-fort-builder/p/HH938',
    price: 4999,
    image: 'https://s7d9.scene7.com/is/image/OCProduction/hh938?$Thumbnail$',
    image_url:
      'https://www.lakeshorelearning.com/products/blocks-manipulatives/building-sets/the-ultimate-fort-builder/p/HH938'
  },
  {
    name: 'Addition Machine',
    url:
      'https://www.lakeshorelearning.com/products/math/basic-operations/addition-machine/p/LC1166',
    price: 1999,
    image: 'https://s7d9.scene7.com/is/image/OCProduction/lc1166?$Thumbnail$',
    image_url:
      'https://www.lakeshorelearning.com/products/math/basic-operations/addition-machine/p/LC1166'
  },
  {
    name: 'Build-It-Yourself Woodworking Kit',
    url:
      'https://www.lakeshorelearning.com/products/blocks-manipulatives/building-sets/build-it-yourself-woodworking-kit/p/HH866',
    price: 3999,
    image: 'https://s7d9.scene7.com/is/image/OCProduction/hh866?$Thumbnail$',
    image_url:
      'https://www.lakeshorelearning.com/products/blocks-manipulatives/building-sets/build-it-yourself-woodworking-kit/p/HH866'
  },
  {
    name: 'Float & Find Alphabet Bubbles',
    url:
      'https://www.lakeshorelearning.com/products/sand-water/sand-water-play/float-find-alphabet-bubbles/p/EE332',
    price: 2999,
    image: 'https://s7d9.scene7.com/is/image/OCProduction/ee332?$Thumbnail$',
    image_url:
      'https://www.lakeshorelearning.com/products/sand-water/sand-water-play/float-find-alphabet-bubbles/p/EE332'
  },
  {
    name: 'Play & Explore Rocket',
    url:
      'https://www.lakeshorelearning.com/products/dramatic-play/cars-trucks-trains/play-explore-rocket/p/PP779',
    price: 3999,
    image: 'https://s7d9.scene7.com/is/image/OCProduction/pp779?$Thumbnail$',
    image_url:
      'https://www.lakeshorelearning.com/products/dramatic-play/cars-trucks-trains/play-explore-rocket/p/PP779'
  },
  {
    name: 'Write & Wipe Alphabet Practice Cards',
    url:
      'https://www.lakeshorelearning.com/products/language/alphabet/write-wipe-alphabet-practice-cards/p/JJ539',
    price: 2499,
    image: 'https://s7d9.scene7.com/is/image/OCProduction/jj539?$Thumbnail$',
    image_url:
      'https://www.lakeshorelearning.com/products/language/alphabet/write-wipe-alphabet-practice-cards/p/JJ539'
  },
  {
    name: 'Botley® the Coding Robot Activity Set',
    image_url:
      'https://www.learningresources.com/botleyr-the-coding-robot-activity-set',
    price: 7999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler2935_4.jpg'
  },
  {
    name: 'Spike the Fine Motor Hedgehog™',
    image_url:
      'https://www.learningresources.com/spike-the-fine-motor-hedgehogtm',
    price: 1499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler8904_main.jpg'
  },
  {
    name: 'Coding Critters™ Ranger & Zip',
    image_url: 'https://www.learningresources.com/coding-critters-dog',
    price: 3999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/3/0/3080-cc-ranger-3-2.jpg'
  },
  {
    name: 'Coding Critters™ Scamper & Sneaker',
    image_url: 'https://www.learningresources.com/coding-critters-cat',
    price: 3999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/3/0/3081-cc-scamper-2-2.jpg'
  },
  {
    name: 'Coding Critters™ Rumble & Bumble',
    image_url: 'https://www.learningresources.com/coding-critters-dino',
    price: 3999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/3/0/3082-cc-rumble-3-2.jpg'
  },
  {
    name: "Farmer's Market Color Sorting Set",
    image_url:
      'https://www.learningresources.com/farmer-s-market-colour-sorting-set',
    price: 3999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler3060_main.jpg'
  },
  {
    name: "Rock 'n' Gem Surprise",
    image_url: 'https://www.learningresources.com/rock-n-gem-surprise',
    price: 1999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/2/8/2875-rock-n-gemsurprise_2_sh-1.jpg'
  },
  {
    name: 'Geometric Shapes Building Set',
    image_url:
      'https://www.learningresources.com/geometric-shapes-building-set',
    price: 3999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler1776_main.jpg'
  },
  {
    name: 'Alphabet Acorns Activity Set',
    image_url: 'https://www.learningresources.com/alphabet-acorns-activity-set',
    price: 2999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler6802_4.jpg'
  },
  {
    name: 'Rhyme & Sort Rockets™',
    image_url: 'https://www.learningresources.com/rhyme-sort-rocketstm',
    price: 3999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler5462_main.jpg'
  },
  {
    name: 'Gears! Gears! Gears!® Robot Factory Building Set',
    image_url:
      'https://www.learningresources.com/gears-gears-gears-r-robot-factory-building-set',
    price: 3999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler9225_main.jpg'
  },
  {
    name: 'Gears! Gears! Gears!® Space Explorers Building Set',
    image_url:
      'https://www.learningresources.com/gears-gears-gears-r-space-explorers-building-set',
    price: 3999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler9217_main.jpg'
  },
  {
    name: 'Gears! Gears! Gears!® CycleGears™',
    image_url:
      'https://www.learningresources.com/gears-gears-gears-r-cyclegearstm',
    price: 1499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler9231_main.jpg'
  },
  {
    name: 'Gears! Gears! Gears!® RoverGears™',
    image_url:
      'https://www.learningresources.com/gears-gears-gears-r-rovergearstm',
    price: 1499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler9232_main.jpg'
  },
  {
    name: '1-2-3 Build It!™ Car-Plane-Boat',
    image_url:
      'https://www.learningresources.com/1-2-3-build-it-tm-car-plane-boat',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler2840_main.jpg'
  },
  {
    name: '1-2-3 Build It!™ Rocket-Train-Helicopter',
    image_url:
      'https://www.learningresources.com/1-2-3-build-it-tm-rocket-train-helicopter',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler2859_3.jpg'
  },
  {
    name: 'Playground Engineering & Design Building Set',
    image_url:
      'https://www.learningresources.com/playground-engineering-design-building-set',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler2842_main.jpg'
  },
  {
    name: 'Pendulonium™ STEM Challenge',
    image_url: 'https://www.learningresources.com/penduloniumtm-stem-challenge',
    price: 1999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler9288_main.jpg'
  },
  {
    name: 'Crashapult™ STEM Challenge',
    image_url: 'https://www.learningresources.com/crashapulttm-stem-challenge',
    price: 1999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler9287_main.jpg'
  },
  {
    name: 'Pretend & Play® School Set',
    image_url: 'https://www.learningresources.com/pretend-playr-school-set',
    price: 3499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler2642_main.jpg'
  },
  {
    name: 'Magnetic U.S. Map Puzzle',
    image_url: 'https://www.learningresources.com/magnetic-u-s-map-puzzle',
    price: 1999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler7714_main.jpg'
  },
  {
    name: 'Pretend & Play® Calculator Cash Register',
    image_url:
      'https://www.learningresources.com/pretend-playr-calculator-cash-register',
    price: 3999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler2629_main_1.jpg'
  },
  {
    name: "Let's Go Code!™ Activity Set",
    image_url:
      'https://www.learningresources.com/let-s-go-code-tm-activity-set',
    price: 3499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler2835_main.jpg'
  },
  {
    name: 'Botley® the Coding Robot',
    image_url: 'https://www.learningresources.com/botleyr-the-coding-robot',
    price: 5999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler2936_1.jpg'
  },
  {
    name: 'Create-a-Space™ Bundle',
    image_url: 'https://www.learningresources.com/create-a-spacetm-bundle',
    price: 5999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/3/8/3808-bundle-1.jpg'
  },
  {
    name: 'Mental Blox® Critical Thinking Game',
    image_url:
      'https://www.learningresources.com/mental-bloxr-critical-thinking-game',
    price: 2999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler9280_main.jpg'
  },
  {
    name: 'Sight Words Swat! A Sight Words Game',
    image_url:
      'https://www.learningresources.com/sight-words-swat-a-sight-words-game',
    price: 1499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler8598_main.jpg'
  },
  {
    name: 'Pretend & Play® Rise & Shine Breakfast',
    image_url:
      'https://www.learningresources.com/pretend-playr-rise-shine-breakfast',
    price: 1999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler9068_main.jpg'
  },
  {
    name: 'Pretend & Play® Fishing Set',
    image_url: 'https://www.learningresources.com/pretend-playr-fishing-set',
    price: 2999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler9055_main.jpg'
  },
  {
    name: 'PreK STEM Bundle',
    image_url: 'https://www.learningresources.com/prek-stem-bundle',
    price: 10999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler2860_main.jpg'
  },
  {
    name: "Lil' Lemonade Stand-Off™ A Memory Matching Game",
    image_url:
      'https://www.learningresources.com/lil-lemonade-stand-offtm-a-memory-matching-game',
    price: 1999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler5023_main.jpg'
  },
  {
    name: 'Pretend & Play® Pro Chef Set',
    image_url: 'https://www.learningresources.com/pretend-playr-pro-chef-set',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/9/0/9082-prochef-set_sh-1.jpg'
  },
  {
    name: 'Money Bags™ Coin Value Game',
    image_url: 'https://www.learningresources.com/money-bagstm-coin-value-game',
    price: 1998,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler5057_main.jpg'
  },
  {
    name: 'Stacking Shapes Pegboard',
    image_url:
      'https://www.learningresources.com/stacking-shapes-pegboard-activity-set',
    price: 1798,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/1/5/1572_geopeg_sh-1.jpg'
  },
  {
    name: 'Pretend & Play® Teaching ATM Bank',
    image_url:
      'https://www.learningresources.com/pretend-and-playr-teaching-atm-bank',
    price: 3999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler2625_main.jpg'
  },
  {
    name: 'Primary Science® Deluxe Lab Set',
    image_url:
      'https://www.learningresources.com/primary-science-deluxe-lab-set',
    price: 4999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler0826_main.jpg'
  },
  {
    name: 'All Ready for Toddler Time Readiness Kit',
    image_url:
      'https://www.learningresources.com/all-ready-for-toddler-time-readiness-kit',
    price: 2999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler3483_main.jpg'
  },
  {
    name: 'Magnetic Elapsed Time Set',
    image_url: 'https://www.learningresources.com/magnetic-elapsed-time-set',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler2983_main.jpg'
  },
  {
    name: 'New Sprouts® Waffle Time!',
    image_url: 'https://www.learningresources.com/new-sproutsr-waffle-time',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler9274_main.jpg'
  },
  {
    name: 'Pop for Sights Words™ Bundle',
    image_url:
      'https://www.learningresources.com/pop-for-sights-wordstm-bundle',
    price: 1899,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/8/6/8629-popwords-bundle_sh-1.jpg'
  },
  {
    name: 'Smart Snacks® Rainbow Color Cones™',
    image_url:
      'https://www.learningresources.com/smart-snacksr-rainbow-color-conestm',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler7349_main.jpg'
  },
  {
    name: 'Primary Science® Lab Set',
    image_url: 'https://www.learningresources.com/primary-sciencetm-lab-set',
    price: 2999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler2784_main.jpg'
  },
  {
    name: 'Super Strong Magnetic Clips',
    image_url: 'https://www.learningresources.com/super-strong-magnetic-clips',
    price: 1499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler2692_main.jpg'
  },
  {
    name: 'Magnetic Pocket Chart Squares (Set of 4)',
    image_url:
      'https://www.learningresources.com/magnetic-pocket-chart-squares-set-of-4',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler2384_main.jpg'
  },
  {
    name: 'New Sprouts® Breakfast, Lunch and Dinner Baskets',
    image_url:
      'https://www.learningresources.com/new-sproutsr-breakfast-lunch-and-dinner-baskets',
    price: 7499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/9/7/9733-ns-baskets_sh-1.jpg'
  },
  {
    name: 'Lights and Sounds Buzzers (Set of 4)',
    image_url:
      'https://www.learningresources.com/lights-and-sounds-buzzers-set-of-4',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler3776_main.jpg'
  },
  {
    name: 'Make a Splash™ 120 Maths Activity Mat',
    image_url:
      'https://www.learningresources.com/make-a-splashtm-120-maths-activity-mat',
    price: 2999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler1772_main.jpg'
  },
  {
    name: 'Under the Sea Shells™',
    image_url:
      'https://www.learningresources.com/under-the-sea-shells-8482-maths-word-problem-activity-set',
    price: 2999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler1770_main.jpg'
  },
  {
    name: 'Word Construction',
    image_url: 'https://www.learningresources.com/word-construction',
    price: 2799,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler5044_main.jpg'
  },
  {
    name: 'Avalanche Fruit Stand',
    image_url:
      'https://www.learningresources.com/avalanche-fruit-standtm-colour-fine-motor-skills-game',
    price: 1999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler5070_main.jpg'
  },
  {
    name: 'New Sprouts® Breakfast Basket',
    image_url:
      'https://www.learningresources.com/new-sproutsr-breakfast-basket',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler9730_main.jpg'
  },
  {
    name: 'POP for Word Families™ Game',
    image_url: 'https://www.learningresources.com/pop-for-word-familiestm',
    price: 999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/8/4/8470-popwordfam_sh_09-19-1.jpg'
  },
  {
    name: 'Giant Magnetic Pattern Blocks',
    image_url:
      'https://www.learningresources.com/giant-magnetic-pattern-blocks',
    price: 2299,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler9863_main.jpg'
  },
  {
    name: 'Smart Snacks® Alpha Pops™',
    image_url: 'https://www.learningresources.com/smart-snacksr-alpha-popstm',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler7345_main.jpg'
  },
  {
    name: 'Smart Splash® Shape Shell Turtles',
    image_url:
      'https://www.learningresources.com/smart-splashr-shape-shell-turtles',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler7303_main.jpg'
  },
  {
    name: 'Goodie Games™ ABC Cookies',
    image_url: 'https://www.learningresources.com/goodie-gamestm-abc-cookies',
    price: 1999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler1183_main.jpg'
  },
  {
    name: 'Attribute Apples™',
    image_url: 'https://www.learningresources.com/attribute-applestm',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/1/0/1023-apple-pile-1_sh-2.jpg'
  },
  {
    name: 'New Sprouts® Lunch Basket',
    image_url: 'https://www.learningresources.com/new-sproutsr-lunch-basket',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler9731_main.jpg'
  },
  {
    name: '1 to 10 Counting Cans',
    image_url: 'https://www.learningresources.com/1-to-10-counting-cans',
    price: 4999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler6800_main.jpg'
  },
  {
    name: 'New Sprouts® Dinner Basket',
    image_url: 'https://www.learningresources.com/new-sproutsr-dinner-basket',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler9732_main.jpg'
  },
  {
    name: 'Hide-n-Go Moo™',
    image_url: 'https://www.learningresources.com/hide-n-go-mootm',
    price: 2799,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/8/9/8922-hiden-go-moo_sh-1.jpg'
  },
  {
    name: 'tri-FACTa!™ Addition & Subtraction Game',
    image_url:
      'https://www.learningresources.com/tri-facta-tm-maths-game-addition-subtraction',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler3038_main.jpg'
  },
  {
    name: 'Multiplication Master Electronic Flash Card™',
    image_url:
      'https://www.learningresources.com/limited-stock-multiplication-master-electronic-flash-cardtm',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler6967_main.jpg'
  },
  {
    name: 'Magnetic Storage Pockets',
    image_url: 'https://www.learningresources.com/magnetic-storage-pockets',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler6447_main.jpg'
  },
  {
    name: 'Crocodile Hop™ Floor Game',
    image_url:
      'https://www.learningresources.com/crocodile-hoptm-early-maths-activity-set',
    price: 3999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler9544_main.jpg'
  },
  {
    name: 'Primary Science® Sensory Tubes',
    image_url:
      'https://www.learningresources.com/primary-sciencer-sensory-tubes',
    price: 3299,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler2445_main.jpg'
  },
  {
    name: 'New Sprouts® Cure It!',
    image_url: 'https://www.learningresources.com/new-sproutsr-cure-it',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler9248_main.jpg'
  },
  {
    name: 'POP for Letters™ Game',
    image_url: 'https://www.learningresources.com/pop-for-letterstm-game',
    price: 999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler8431_main.jpg'
  },
  {
    name: 'New Sprouts® Munch It!',
    image_url:
      'https://www.learningresources.com/new-sproutsr-munch-it-my-very-own-play-food',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler7711_1.jpg'
  },
  {
    name: 'New Sprouts® Picnic!',
    image_url: 'https://www.learningresources.com/new-sproutsr-picnic',
    price: 2999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/9/2/9266-new-sprouts-picnic-basket_sh_07-19-1.jpg'
  },
  {
    name: 'New Sprouts® Bushel of Fruit',
    image_url: 'https://www.learningresources.com/new-sproutsr-bushel-of-fruit',
    price: 1499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler9720_1.jpg'
  },
  {
    name: 'Gears! Gears! Gears!® Deluxe Building Set (Set of 100)',
    image_url:
      'https://www.learningresources.com/gears-gears-gears-r-deluxe-building-set-set-of-100',
    price: 3299,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler9162_main.jpg'
  },
  {
    name: 'View-Thru® Geometric Solids (Set of 14)',
    image_url:
      'https://www.learningresources.com/view-thrur-geometric-solids-set-of-14',
    price: 1799,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler4331_main.jpg'
  },
  {
    name: 'New Sprouts® Serve It!',
    image_url:
      'https://www.learningresources.com/new-sproutsr-serve-it-my-very-own-dish-set',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler3294_main.jpg'
  },
  {
    name: 'Jumbo Jungle Animals',
    image_url: 'https://www.learningresources.com/jumbo-jungle-animals',
    price: 3499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler0693_main.jpg'
  },
  {
    name: 'Real World Folding Geometric Shapes™ (Set of 32)',
    image_url:
      'https://www.learningresources.com/real-world-folding-geometric-shapestm-set-of-32',
    price: 3699,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler4356_main.jpg'
  },
  {
    name: "Smart Snacks® Stack 'em Up Doughnuts™",
    image_url:
      'https://www.learningresources.com/smart-snacksr-stack-em-up-doughnutstm',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/7/3/7352-ss-doughnuts_b_sh-1.jpg'
  },
  {
    name: 'Letter Construction Activity Set',
    image_url:
      'https://www.learningresources.com/letter-construction-activity-set',
    price: 3999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler8555_main.jpg'
  },
  {
    name: 'Primary Science® ViewScope',
    image_url: 'https://www.learningresources.com/primary-sciencer-viewscope',
    price: 1999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler2760_main.jpg'
  },
  {
    name: 'Primary Science® Jumbo Test Tubes with Stand',
    image_url:
      'https://www.learningresources.com/primary-sciencer-jumbo-test-tubes-with-stand',
    price: 1599,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler2788_1.jpg'
  },
  {
    name: 'POP for Addition and Subtraction™ Game',
    image_url:
      'https://www.learningresources.com/pop-for-addition-and-subtractiontm',
    price: 999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler8441_main.jpg'
  },
  {
    name: 'Smart Snacks® Counting Cookies™',
    image_url:
      'https://www.learningresources.com/smart-snacksr-counting-cookiestm',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler7348_main.jpg'
  },
  {
    name: 'POP for Blends™ Game',
    image_url: 'https://www.learningresources.com/pop-for-blendstm',
    price: 999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/8/4/8471-popblends_sh_09-19-1.jpg'
  },
  {
    name: 'POP for Sight Words™ Game',
    image_url: 'https://www.learningresources.com/pop-for-sight-wordstm-game',
    price: 999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler8430_main_1.jpg'
  },
  {
    name: 'Splash of Color Magnetic Sorting Set',
    image_url:
      'https://www.learningresources.com/splash-of-colour-magnetic-sorting-set',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/9/5/9590-color-sorting-set-box-1.jpg'
  },
  {
    name: '15" Hand Pointers (Set of 3)',
    image_url: 'https://www.learningresources.com/hand-pointers-15-set-of-3',
    price: 1299,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler2655_1.jpg'
  },
  {
    name: 'New Sprouts® Camp Out!',
    image_url: 'https://www.learningresources.com/new-sproutsr-camp-out',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler9247_main.jpg'
  },
  {
    name: 'New Sprouts® Fresh Fruit Salad Set',
    image_url:
      'https://www.learningresources.com/new-sproutsr-fresh-fruit-salad-set',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler9268_main.jpg'
  },
  {
    name: 'Create-a-Maze™',
    image_url: 'https://www.learningresources.com/create-a-mazetm',
    price: 2999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler2823_main.jpg'
  },
  {
    name: 'Froggy Feeding Fun™ Fine Motor Skills Game',
    image_url:
      'https://www.learningresources.com/froggy-feeding-funtm-fine-motor-skills-game',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler5072_main.jpg'
  },
  {
    name: '1-10 Counting Owls Activity Set',
    image_url:
      'https://www.learningresources.com/1-10-counting-owls-activity-set',
    price: 1999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler7732_main.jpg'
  },
  {
    name: 'Jumbo Dinosaurs - Mommas and Babies',
    image_url:
      'https://www.learningresources.com/jumbo-dinosaurs-mommas-and-babies',
    price: 3499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler0836_main.jpg'
  },
  {
    name: 'Code & Go® Robot Mouse Activity Set',
    image_url:
      'https://www.learningresources.com/code-gor-robot-mouse-activity-set',
    price: 5999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler2831_main.jpg'
  },
  {
    name: 'Mental Blox® 360',
    image_url: 'https://www.learningresources.com/mental-bloxr-360',
    price: 2999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler9284_main.jpg'
  },
  {
    name: 'Primary Science® Shining Stars Projector',
    image_url:
      'https://www.learningresources.com/primary-sciencer-shining-stars-projector',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler2830_main.jpg'
  },
  {
    name: 'Jumbo Dinosaurs Set 2',
    image_url: 'https://www.learningresources.com/jumbo-dinosaurs-set-2',
    price: 3499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler0837_main.jpg'
  },
  {
    name: 'Dinosaur Counters (Set of 60)',
    image_url: 'https://www.learningresources.com/dinosaur-counters-set-of-60',
    price: 2999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler0811_main.jpg'
  },
  {
    name: 'Farm Animal Counters (Set of 60)',
    image_url:
      'https://www.learningresources.com/farm-animal-counters-set-of-60',
    price: 2999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/0/8/0810-farmcounters_1_sh-1.jpg'
  },
  {
    name: 'Jumbo Jungle Animals - Mommas and Babies',
    image_url:
      'https://www.learningresources.com/jumbo-jungle-animals-mommas-and-babies',
    price: 3499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/0/8/0839-jumbojunglemombabies_sh-1.jpg'
  },
  {
    name: 'All About Me Buddy Builders™',
    image_url:
      'https://www.learningresources.com/all-about-me-buddy-builderstm',
    price: 1699,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler1081_main.jpg'
  },
  {
    name: 'Jumbo Dinosaur Floor Puzzle T-Rex',
    image_url:
      'https://www.learningresources.com/jumbo-dinosaur-floor-puzzle-t-rex',
    price: 2999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler2389_main.jpg'
  },
  {
    name: 'Peg Friends™ Around the Town',
    image_url:
      'https://www.learningresources.com/peg-friendstm-around-the-town',
    price: 1999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler3375_main.jpg'
  },
  {
    name: 'Birds in a Nest Sorting Set',
    image_url: 'https://www.learningresources.com/birds-in-a-nest-sorting-set',
    price: 1999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler5554_main.jpg'
  },
  {
    name: 'Snap-n-Learn™ Number Turtles',
    image_url:
      'https://www.learningresources.com/snap-n-learntm-number-turtles',
    price: 1999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler6706_main.jpg'
  },
  {
    name: 'Letter Blocks',
    image_url: 'https://www.learningresources.com/letter-blocks',
    price: 1999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler7718_main.jpg'
  },
  {
    name: 'Number & Counting Building Blocks',
    image_url:
      'https://www.learningresources.com/number-counting-building-blocks',
    price: 1999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler7719_main.jpg'
  },
  {
    name: 'Count & Build TotBot™ Builder',
    image_url: 'https://www.learningresources.com/count-build-totbottm-builder',
    price: 1999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler7734_main.jpg'
  },
  {
    name: 'Latch & Learn School House™',
    image_url: 'https://www.learningresources.com/latch-learn-school-housetm',
    price: 2999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler7736_main.jpg'
  },
  {
    name: 'Rainbow Learning Xylophone',
    image_url:
      'https://www.learningresources.com/limited-stock-learning-xylophone',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler7738_main.jpg'
  },
  {
    name: 'Trace & Learn Writing Activity Set',
    image_url:
      'https://www.learningresources.com/trace-learn-writing-activity-set',
    price: 1499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler8599_main.jpg'
  },
  {
    name: 'Pretend & Play® Doctor Play Set',
    image_url:
      'https://www.learningresources.com/pretend-playr-doctor-play-set',
    price: 1999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler9057_main.jpg'
  },
  {
    name: 'New Sprouts® Mix It!',
    image_url: 'https://www.learningresources.com/new-sproutsr-mix-it',
    price: 1999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler9275_main.jpg'
  },
  {
    name: 'New Sprouts® Smoothie Maker',
    image_url: 'https://www.learningresources.com/new-sproutsr-smoothie-maker',
    price: 1999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler9276_main.jpg'
  },
  {
    name: 'Mental Blox® Jr.',
    image_url: 'https://www.learningresources.com/mental-bloxr-jr',
    price: 1999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler9285_main.jpg'
  },
  {
    name: 'Double-Sided Magnetic Demonstration Rainbow Fraction® Squares',
    image_url:
      'https://www.learningresources.com/double-sided-magnetic-demonstration-rainbow-fractionr-squares',
    price: 2999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler1617_main.jpg'
  },
  {
    name: 'Counting Dino-Sorters Math Activity Set',
    image_url:
      'https://www.learningresources.com/counting-dino-sorters-maths-activity-set',
    price: 2999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler1768_main.jpg'
  },
  {
    name: 'Time Activity Set',
    image_url: 'https://www.learningresources.com/time-activity-set',
    price: 1499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler3220_main.jpg'
  },
  {
    name: 'Magnetic Addition Machine',
    image_url: 'https://www.learningresources.com/magnetic-addition-machine',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler6368_main.jpg'
  },
  {
    name: 'Fox in the Box Positional Words Activity Set',
    image_url:
      'https://www.learningresources.com/fox-in-the-box-positional-words-activity-set',
    price: 2999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler3201_main.jpg'
  },
  {
    name: 'Magnetic Ten Frame Boards (Set of 4)',
    image_url:
      'https://www.learningresources.com/magnetic-ten-frame-boards-set-of-4',
    price: 2999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler6645_main.jpg'
  },
  {
    name: 'Create-a-Space™ Storage Center',
    image_url:
      'https://www.learningresources.com/create-a-spacetm-storage-center',
    price: 1899,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler3806_main.jpg'
  },
  {
    name: 'Soft Foam Emoji Cubes',
    image_url: 'https://www.learningresources.com/emoji-cubes',
    price: 1299,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler7289_main.jpg'
  },
  {
    name: 'Magnetic Collaboration Boards',
    image_url:
      'https://www.learningresources.com/magnetic-collaboration-boards',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler6370_main.jpg'
  },
  {
    name: 'Peg Friends™ Stacking Farm',
    image_url: 'https://www.learningresources.com/peg-friendstm-stacking-farm',
    price: 1999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler3376_main.jpg'
  },
  {
    name: 'Jumbo Dinosaur Floor Puzzle Triceratops',
    image_url:
      'https://www.learningresources.com/jumbo-dinosaur-floor-puzzle-triceratops',
    price: 2999,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler2857_main.jpg'
  },
  {
    name: 'Skate Park Engineering & Design Building Set',
    image_url:
      'https://www.learningresources.com/skate-park-engineering-design-building-set',
    price: 1699,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler2845_main.jpg'
  },
  {
    name: 'Tree House Engineering & Design Building Set',
    image_url:
      'https://www.learningresources.com/tree-house-engineering-design-building-set',
    price: 1699,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler2844_main.jpg'
  },
  {
    name: 'City Engineering & Design Building Set',
    image_url:
      'https://www.learningresources.com/city-engineering-design-building-set',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler2843_main.jpg'
  },
  {
    name: 'Primary Science® Headlamp Projector',
    image_url:
      'https://www.learningresources.com/primary-sciencer-headlamp-projector',
    price: 1699,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler2836_1.jpg'
  },
  {
    name: 'Smart Snacks® ABC Lacing Sweets™',
    image_url:
      'https://www.learningresources.com/smart-snacksr-abc-lacing-sweetstm',
    price: 2499,
    image:
      'https://www.learningresources.com/media/catalog/product/cache/07a476f4d93c03a411cc863db493b5f3/l/e/ler7204_main.jpg'
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all(
    toys.map(toy => {
      return Toy.create(toy)
    })
  )

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${toys.length} toys`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
