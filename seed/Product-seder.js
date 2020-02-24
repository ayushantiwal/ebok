var Product = require("../models/product");

var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true, useUnifiedTopology: true });

var products = [
	new Product({
		imagePath: '/images/seven habit of highly people.jpg',
		title: 'The Seven Habits of Highly Effective People',
		description: '172 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/think and grow rich.jpg',
		title: 'Think And Grow Rich By Napolean Hill',
		description: '253 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/the power of now.jpg',
		title: 'The Power Of Now: A Guide to Spritual Enlightenment',
		description: '124 Pages',
		price: 30
	}),
	new Product({
		imagePath: '/images/the art of work.png',
		title: 'The Art Of Work',
		description: '262 Pages+',
		price: 30
	}),

	new Product({
		imagePath: '/images/subtle.png',
		title: 'The Subtle Art Of Not giving a F*ck',
		description: '140 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/5 second rule.jpg',
		title: 'The 5 Second Rule',
		description: '252 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/the miracle morning.jpg',
		title: 'The Miracle Morning',
		description: '187 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/psy a self teaching guide.jpg',
		title: 'Psychology-A Self Teaching Guide',
		description: '289 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/subconscious mind.jpg',
		title: 'The Power Of Subconscious Mind',
		description: '222 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/the-warren-buffet-way.jpg',
		title: 'The Warren Buffet Way',
		description: '274 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/therichestman-babylon.jpg',
		title: 'The Richest Man In Babylon',
		description: '191 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/your-money-or-your-life.jpg',
		title: 'Your Money Or Your Life',
		description: '349 Pages',
		price: 30
	}),
	new Product({
		imagePath: '/images/autobiography-of-yogi.jpg',
		title: 'Autobiography Of Yogi',
		description: '612 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/the-intelligent-investor.jpg',
		title: 'The Intelligent Investor By Benjamin Graham',
		description: '641 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/the-monk-who-sold-his-ferrari.jpg',
		title: 'The Monk Who Sold His Ferrari',
		description: '208 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/atomic-habbits.jpg',
		title: 'Atomic Habbits: Tiny Changes, remarkable results',
		description: '286 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/how-successfull-people-think.jpg',
		title: 'How Successfull People Think',
		description: '225 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/no-excuses.jpg',
		title: 'No Excuses: The Power Of Self Descipline',
		description: '308 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/stevejobswalter.jpg',
		title: 'Steve Jobs By Walter Isacson',
		description: '532 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/the-purple-cow.jpg',
		title: 'The Purple Cow',
		description: '160 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/subtleis the lord.jpg',
		title: 'Subtle Is the Lord:Life Of Albert Einstein',
		description: '575 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/public speaking.jpg',
		title: 'The Art Of Public Speaking',
		description: '467 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/the-artist-way.jpg',
		title: 'The Artist’s Way: A Spiritual Path to Higher Creativity',
		description: '431 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/blink-the-power-thinking-without-thinking.webp',
		title: 'Blink: The Power of Thinking Without Thinking',
		description: '374 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/napoleon-biography.jpg',
		title: 'Napoleon : A Biography',
		description: '767 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/presentationsecrets.jpg',
		title: 'Presentation Secrets Of Steve Jobs',
		description: '257 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/give-and-take.jpg',
		title: 'Give and Take: Why Helping Others Drive Our Success',
		description: '260 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/linchpin.jpg',
		title: 'Linchpin: Are You Indispensable',
		description: '191 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/how-to-win-friends-and-influence-people.jpeg',
		title: 'How to Win Friends & Influence People',
		description: '292 Pages',
		price: 30
	}),
	new Product({
		imagePath: '/images/you-are-badass.jpg',
		title: 'You Are a Badass',
		description: '689 Pages',
		price: 30
	}),
	new Product({
		imagePath: '/images/swami-vivekananand.jpg',
		title: 'Swami Vivekananda - A Biography',
		description: '191 Pages',
		price: 30
	}),
	new Product({
		imagePath: '/images/Iam-malala.jpg',
		title: 'I am Malala: A AutoBiography',
		description: '195 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/dillema.jpg',
		title: 'The Innovator s Dilemma',
		description: '298 Pages',
		price: 30
	}),
	new Product({
		imagePath: '/images/congnitive-psychology.jpg',
		title: 'Cognitive Psychology',
		description: '714 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/digital-marketing.jpg',
		title: 'Digital Marketing Analytics',
		description: '385 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/elon-musk.jpg',
		title: 'Elon Musk:',
		description: '349 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/see-you-at-the-top.jpg',
		title: 'See You At The Top',
		description: '386 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/awaken.jpg',
		title: 'Awaken the Giant Within - A Success Dream',
		description: '378 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/rollar-coaster.jpg',
		title: 'The Entrepreneur Roller Coaster',
		description: '411 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/silicon-valley.jpg',
		title: 'Silicon Valley North',
		description: '360 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/money-master-the-game.jpg',
		title: 'MONEY Master the Game',
		description: '491 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/unlimeted-power.jpg',
		title: 'Unlimited Power',
		description: '185 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/the-magic-of-thinking-big.jpg',
		title: 'The Magic Of Thinking Big',
		description: '318 Pages',
		price: 30
	}),

	new Product({
		imagePath: '/images/the-alchemist.jpg',
		title: 'The Alchemist',
		description: '750 Pages',
		price: 30
	}),
	new Product({
		imagePath: '/images/the-hard-thing-about-things.jpg',
		title: 'The Hard Thing About The Hard Things',
		description: '224 Pages',
		price: 30
	}),
	new Product({
		imagePath: '/images/whateverybody.jpg',
		title: 'What EveryBody is Saying',
		description: '283 Pages',
		price: 30
	}),
	new Product({
		imagePath: '/images/zerotoone.jpg',
		title: 'Zero To One',
		description: '180 Pages',
		price: 30
	}),
	new Product({
		imagePath: '/images/startwithwhy.jpg',
		title: 'Start With Why',
		description: '271 Pages',
		price: 30
	}),

];


var done = 0;


for (var i = 0;i < products.length;i++) {
	products[i].save(function (err, result) {
		done++;
		if (done == products.length) {
			exit();
		}
	});
}

function exit() {
	mongoose.disconnect();
}

