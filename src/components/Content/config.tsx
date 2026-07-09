import oneImage from '~/assets/one.svg'
import threeImage from '~/assets/three.svg'
import twoImage from '~/assets/two.svg'
import pic1Image from '~/assets/pic-1.jpg'
import pic2Image from '~/assets/pic-2.jpg'
import pic3Image from '~/assets/pic-3.jpg'

const config = {
  sections: [
    {
      count: oneImage,
      img: pic1Image,
      title: 'What level of  hiker are you?',
      subtitle: 'Get Started',
      text: 'Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?',
      extra: 'read more',
    },
    {
      count: twoImage,
      img: pic2Image,
      title: 'Picking the right Hiking Gear!',
      subtitle: 'Hiking Essentials',
      text: `The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.`,
      extra: 'read more',
    },
    {
      count: threeImage,
      img: pic3Image,
      title: 'Understand Your Map & Timing',
      subtitle: 'where you go is the key',
      text: 'To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..',
      extra: 'read more',
    },
  ],
}

export default config
