if (Projects.find().count() === 0) {
    Projects.insert({
        name: 'BigBang 2015 @ Prudential Center',
        // userId: this.userId(),
        startTime: 1700,
        endTime: 2000,
        totalPeople: 400,
        totalNumbers: 0
    });

    Projects.insert({
        name: 'Jay Park & AOMG @ PlayStation Theater',
        // userId: this.userId(),
        startTime: 1500,
        endTime: 1800,
        totalPeople: 200,
        totalNumbers: 0
    });
}


// Categories.remove({});
// if (Categories.find().count() === 0) {
//     var categoryNames = [
//         'Family Dogs Being Put Down',
//         'Perfectly Crafted Business Deals that Fell Through the Cracks at the Last Moment',
//         'Military Returning Home',
//         'Eternal Sunshine of the Spotless Mind',
//         'Thai Commercials About Living Simply and Kindly'
//     ]

//     for (var i = 0; i < categoryNames.length; i++) {
//         Categories.insert({
//             name: categoryNames[i]
//         });
//     }
// };

// Content.remove({});
// if (Content.find().count() === 0) {
//     var categoryMilitary = Categories.findOne({name: 'Military Returning Home'})._id;
//     var categoryDogs = Categories.findOne({name: 'Family Dogs Being Put Down'})._id;
//     var categoryBusiness = Categories.findOne({name: 'Perfectly Crafted Business Deals that Fell Through the Cracks at the Last Moment'})._id;
//     var categoryThai = Categories.findOne({name: 'Thai Commercials About Living Simply and Kindly'})._id;
//     var categorySunshine = Categories.findOne({name: 'Eternal Sunshine of the Spotless Mind'})._id;
//     Content.insert({
//         categoryId: categoryMilitary,
//         level: 'normal',
//         type: 'video',
//         videoId: 'gnEnhmrOHwk'
//     })
//     Content.insert({
//         categoryId: categoryMilitary,
//         level: 'normal',
//         type: 'video',
//         videoId: 'eZ6oS5dUT30'
//     })
//     Content.insert({
//         categoryId: categoryMilitary,
//         level: 'power',
//         type: 'video',
//         videoId: 'MsEZBSTc3a0',
//         length: '2m45s'
//     })
//     Content.insert({
//         categoryId: categoryMilitary,
//         level: 'normal',
//         type: 'video',
//         videoId: '5MpryyCgFjI',
//         length: '2m45s'
//     })
//     Content.insert({
//         categoryId: categoryMilitary,
//         level: 'normal',
//         type: 'video',
//         videoId: '1cgiuFdLau8',
//         length: '2m45s'
//     })
//     Content.insert({
//         categoryId: categoryMilitary,
//         level: 'normal',
//         type: 'video',
//         videoId: 'vt8gA-GdoL4',
//         length: '2m45s'
//     })
//     Content.insert({
//         categoryId: categoryDogs,
//         level: 'normal',
//         type: 'video',
//         videoId: '9NS5CSqqG80',
//         length: '2m45s'
//     })
//     Content.insert({
//         categoryId: categoryDogs,
//         level: 'normal',
//         type: 'video',
//         videoId: 'P4t8r62vYJM',
//         length: '2m45s'
//     })
//     Content.insert({
//         categoryId: categoryDogs,
//         level: 'normal',
//         type: 'video',
//         videoId: 'OphVH0aoPEY',
//         length: '2m45s'
//     })
//     Content.insert({
//         categoryId: categoryBusiness,
//         level: 'normal',
//         type: 'video',
//         videoId: '1-oIL9cLHDc',
//         length: '2m45s'
//     })
//     Content.insert({
//         categoryId: categoryBusiness,
//         level: 'normal',
//         type: 'video',
//         videoId: 'rhnHKw6yprM',
//         length: '2m45s'
//     })
//     Content.insert({
//         categoryId: categoryBusiness,
//         level: 'normal',
//         type: 'video',
//         videoId: 'db5E7SIDnOo',
//         length: '2m45s'
//     })
//     Content.insert({
//         categoryId: categoryThai,
//         level: 'normal',
//         type: 'video',
//         videoId: 'BTJH3CP23DI',
//         length: '2m45s'
//     })
//     Content.insert({
//         categoryId: categoryThai,
//         level: 'normal',
//         type: 'video',
//         videoId: 'Y-Xlc3OY_zg',
//         length: '2m45s'
//     })
//     Content.insert({
//         categoryId: categoryThai,
//         level: 'normal',
//         type: 'video',
//         videoId: 'lx1W8xYmLfM',
//         length: '2m45s'
//     })
//     Content.insert({
//         categoryId: categoryThai,
//         level: 'normal',
//         type: 'video',
//         videoId: '70ZXdtAk_5Y',
//         length: '2m45s'
//     })
//     Content.insert({
//         categoryId: categorySunshine,
//         level: 'normal',
//         type: 'video',
//         videoId: '3lvNGhBXTU0',
//         length: '2m45s'
//     })
//     Content.insert({
//         categoryId: categorySunshine,
//         level: 'normal',
//         type: 'video',
//         videoId: 'NTmlNigifSI',
//         length: '2m45s'
//     })
//     Content.insert({
//         categoryId: categorySunshine,
//         level: 'normal',
//         type: 'video',
//         videoId: 'KDNTUkP8kXc',
//         length: '2m45s'
//     })
//     Content.insert({
//         categoryId: categorySunshine,
//         level: 'normal',
//         type: 'video',
//         videoId: '_BlmIXSOi9E',
//         length: '2m45s'
//     })
// }
