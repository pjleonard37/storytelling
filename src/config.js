var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoicGpsZW9uYXJkMzciLCJhIjoiY2xnam1idmY5MHQxYzNrc3ZiemxjOW9iMiJ9.KzE9PAw9lytLQClHfeZ-5A',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'globe',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Patrick Leonard',
    footer: 'Source: my memory <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Early life',
            image: 'images/Whitman.webp',
            description: 'I grew up in Whitman, MA, a small town south of Boston in Massachusetts in the North East.',
            location: {
                center: [-70.94, 42.08],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'High School',
            image: 'images/WH.jpeg',
            description: '2010 - I went to high school in my town.',
            location: {
                center: [-70.90536, 42.07167],
                zoom: 15.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'University',
            image: 'images/mbta.png',
            description: '2014 - I went to Harvard for university where I made my first web map and got interested in GIS & mapping.',
            location: {
                center: [-71.1176, 42.3745],
                zoom: 15.08,
                pitch: 60,
                bearing: 22.42
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Edinburgh, Scotland',
            image: 'images/Scotland.jpeg',
            description: '2014 - I lived in Edinburgh, Scotland. Kilt & castle shown as proof.',
            location: {
                center: [-3.211, 55.948],
                zoom: 12.6,
                pitch: 46.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Philadelphia, PA',
            image: 'images/Philadelphia.jpeg',
            description: '2015 - I moved to Philadelphia. Here pictured very tired after the Philly marathon.',
            location: {
                center: [-75.15656, 39.94991],
                zoom: 12.20,
                pitch: 47.64,
                bearing: -18.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Portland, OR',
            image: 'images/Portland.jpeg',
            description: '2017 - I moved to Portland, on the West Coast. Throughout this time I worked in web development and data visualization.',
            location: {
                center: [-122.68888, 45.52138],
                zoom: 12.58,
                pitch: 58.50,
                bearing: 9.6
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Washignton, D.C.',
            image: 'images/Crabs.jpg',
            description: '2018 - I moved to Washington, D.C. Here pictured with crabs, a regional delicacy.',
            location: {
                center: [-77.04041, 38.87834],
                zoom: 11.19,
                pitch: 53,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eight-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Mapbox',
            image: 'images/Mapbox.jpeg',
            description: '2019 - I started at Mapbox, working in our (now very empty) office.',
            location: {
                center: [-77.03392, 38.89995],
                zoom: 16.73,
                pitch: 53,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
