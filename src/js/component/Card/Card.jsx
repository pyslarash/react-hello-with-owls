import React from "react";
import pic00 from "./img/00.jpg";
import pic01 from "./img/01.jpg";
import pic02 from "./img/02.jpg";
import pic03 from "./img/03.jpg";

const dataSet = [];

const data00 = {
	image: pic00,
	cardTitle: "Snowy owl",
	cardDescription:
		"The snowy owl (Bubo scandiacus), also known as the polar owl, the white owl and the Arctic owl, is a large, white owl of the true owl family.",
	button: {
		url: "https://en.wikipedia.org/wiki/Snowy_owl",
		label: "Go to wikipedia",
	},
};

const data01 = {
	image: pic01,
	cardTitle: "Barn owl",
	cardDescription:
		"The barn owl (Tyto alba) is the most widely distributed species of owl in the world and one of the most widespread of all species of birds.",
	button: {
		url: "https://en.wikipedia.org/wiki/Barn_owl",
		label: "Go to wikipedia",
	},
};

const data02 = {
	image: pic02,
	cardTitle: "Great horned owl",
	cardDescription:
		"The great horned owl (Bubo virginianus), also known as the tiger owl, or the hoot owl, is a large owl native to the Americas.",
	button: {
		url: "https://en.wikipedia.org/wiki/Great_horned_owl",
		label: "Go to wikipedia",
	},
};

const data03 = {
	image: pic03,
	cardTitle: "Little owl",
	cardDescription:
		"The little owl (Athene noctua), also known as the owl of Athena or owl of Minerva, is a bird that inhabits much of the temperate and warmer parts of Europe, the Palearctic east to Korea, and North Africa.",
	button: {
		url: "https://en.wikipedia.org/wiki/Little_owl",
		label: "Go to wikipedia",
	},
};

dataSet.push(data00, data01, data02, data03);

const showData = dataSet.map((dataItem, i) => {
    return (
    <div class="col-sm" key={i}>
        <div className="card" styleName="width: 18rem;">
                <img src={dataItem.image} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{dataItem.cardTitle}</h5>
                <p className="card-text">{dataItem.cardDescription}</p>
                <a href={dataItem.button.url} className="btn btn-primary">{dataItem.button.label}</a>
            </div>
        </div>
    </div>
    )
});

const Card = () => {
    return (
        <div class="container mt-3">
            <div class="row">
                {showData}
            </div>
        </div>
    )
}

export default Card;