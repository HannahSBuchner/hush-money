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
    name: 'Regular Dot Art Painters - Set of 6',
    url:
      'https://www.lakeshorelearning.com/products/arts-crafts/paint-painting-accessories/regular-dot-art-painters-setof6/p/EV212',
    price: 1599,
    image: 'https://s7d9.scene7.com/is/image/OCProduction/ev212?$Thumbnail$',
    image_url:
      'https://www.lakeshorelearning.com/products/arts-crafts/paint-painting-accessories/regular-dot-art-painters-setof6/p/EV212'
  },
  {
    name: 'Alpha-Bots',
    url:
      'https://www.lakeshorelearning.com/products/language/alphabet/alpha-bots/p/AC225',
    price: 2999,
    image: 'https://s7d9.scene7.com/is/image/OCProduction/ac225?$Thumbnail$',
    image_url:
      'https://www.lakeshorelearning.com/products/language/alphabet/alpha-bots/p/AC225'
  },
  {
    name: 'Create-A-Chain Reaction STEM Kit - Pre K-Gr. 2 - Starter Set',
    url:
      'https://www.lakeshorelearning.com/products/stem/building-engineering/create-a-chain-reaction-stem-kit-pre-span-stylewhite-space-nowrapk-gr-span2-starter-set/p/PP565',
    price: 4999,
    image: 'https://s7d9.scene7.com/is/image/OCProduction/pp565?$Thumbnail$',
    image_url:
      'https://www.lakeshorelearning.com/products/stem/building-engineering/create-a-chain-reaction-stem-kit-pre-span-stylewhite-space-nowrapk-gr-span2-starter-set/p/PP565'
  },
  {
    name: 'Flex-Space Comfy Floor Seats',
    url:
      'https://www.lakeshorelearning.com/products/classroom-furniture/chairs-seating/flex-space-comfy-floor-seats/p/LC405',
    price: 5999,
    image: 'https://s7d9.scene7.com/is/image/OCProduction/lc405_g?$Thumbnail$',
    image_url:
      'https://www.lakeshorelearning.com/products/classroom-furniture/chairs-seating/flex-space-comfy-floor-seats/p/LC405'
  },
  {
    name: 'Mold & Play Sensory Sand Set',
    url:
      'https://www.lakeshorelearning.com/products/sand-water/sand-water-play/mold-play-sensory-sand-set/p/EE200',
    price: 2999,
    image: 'https://s7d9.scene7.com/is/image/OCProduction/ee200?$Thumbnail$',
    image_url:
      'https://www.lakeshorelearning.com/products/sand-water/sand-water-play/mold-play-sensory-sand-set/p/EE200'
  },
  {
    name: 'The Allowance Game®',
    url:
      'https://www.lakeshorelearning.com/products/games/board-dice-games/the-allowance-gamesup-sup/p/LC1279',
    price: 1999,
    image: 'https://s7d9.scene7.com/is/image/OCProduction/lc1279?$Thumbnail$',
    image_url:
      'https://www.lakeshorelearning.com/products/games/board-dice-games/the-allowance-gamesup-sup/p/LC1279'
  },
  {
    name: 'Indoor/Outdoor Kids’ Croquet',
    url:
      'https://www.lakeshorelearning.com/products/games/outdoor-games/indoor-outdoor-kids-croquet/p/GM771',
    price: 5999,
    image: 'https://s7d9.scene7.com/is/image/OCProduction/gm771?$Thumbnail$',
    image_url:
      'https://www.lakeshorelearning.com/products/games/outdoor-games/indoor-outdoor-kids-croquet/p/GM771'
  },
  {
    name: 'Squish & Squeeze Sensory Beads',
    url:
      'https://www.lakeshorelearning.com/products/sensory-exploration/sensory-play/squish-squeeze-sensory-beads/p/VR154',
    price: 1999,
    image: 'https://s7d9.scene7.com/is/image/OCProduction/vr154?$Thumbnail$',
    image_url:
      'https://www.lakeshorelearning.com/products/sensory-exploration/sensory-play/squish-squeeze-sensory-beads/p/VR154'
  },
  {
    name: 'Early Math Activity Center',
    url:
      'https://www.lakeshorelearning.com/products/math/sorting-patterning/early-math-activity-center/p/FF186',
    price: 3999,
    image: 'https://s7d9.scene7.com/is/image/OCProduction/ff186?$Thumbnail$',
    image_url:
      'https://www.lakeshorelearning.com/products/math/sorting-patterning/early-math-activity-center/p/FF186'
  },
  {
    name: 'My Keepsake Portfolio',
    url:
      'https://www.lakeshorelearning.com/products/arts-crafts/craft-collage-materials/my-keepsake-portfolio/p/DD649',
    price: 2199,
    image: 'https://s7d9.scene7.com/is/image/OCProduction/dd649?$Thumbnail$',
    image_url:
      'https://www.lakeshorelearning.com/products/arts-crafts/craft-collage-materials/my-keepsake-portfolio/p/DD649'
  },
  {
    name: 'Foam Sensory Paint - Set of 5',
    url:
      'https://www.lakeshorelearning.com/products/sensory-exploration/sensory-play/foam-sensory-paint-setof5/p/PP670',
    price: 2999,
    image: 'https://s7d9.scene7.com/is/image/OCProduction/pp670?$Thumbnail$',
    image_url:
      'https://www.lakeshorelearning.com/products/sensory-exploration/sensory-play/foam-sensory-paint-setof5/p/PP670'
  },
  {
    name: 'Let’s Play School',
    url:
      'https://www.lakeshorelearning.com/products/dramatic-play/dress-up-role-play/lets-play-school/p/AA658',
    price: 5999,
    image: 'https://s7d9.scene7.com/is/image/OCProduction/aa658?$Thumbnail$',
    image_url:
      'https://www.lakeshorelearning.com/products/dramatic-play/dress-up-role-play/lets-play-school/p/AA658'
  },
  {
    name: 'What’s Inside? Soft Feely Box',
    url:
      'https://www.lakeshorelearning.com/products/infants-toddlers/sensory-development/whats-inside-soft-feely-box/p/JJ909',
    price: 4999,
    image: 'https://s7d9.scene7.com/is/image/OCProduction/jj909?$Thumbnail$',
    image_url:
      'https://www.lakeshorelearning.com/products/infants-toddlers/sensory-development/whats-inside-soft-feely-box/p/JJ909'
  },
  {
    name: 'Real Bugs Discovery Kit',
    url:
      'https://www.lakeshorelearning.com/products/science/life-science/real-bugs-discovery-kit/p/DD646',
    price: 1999,
    image: 'https://s7d9.scene7.com/is/image/OCProduction/dd646?$Thumbnail$',
    image_url:
      'https://www.lakeshorelearning.com/products/science/life-science/real-bugs-discovery-kit/p/DD646'
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
