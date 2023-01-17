import React from "react";
import propTypes from "prop-types";
import pic00 from "./img/00.jpg";
import pic01 from "./img/01.jpg";
import pic02 from "./img/02.jpg";
import pic03 from "./img/03.jpg";

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
		"The little owl, also known as the owl of Athena or owl of Minerva, is a bird that inhabits much of the temperate and warmer parts of Europe, the Palearctic east to Korea, and North Africa.",
	button: {
		url: "https://en.wikipedia.org/wiki/Little_owl",
		label: "Go to wikipedia",
	},
};

const dataSet = [data00, data01, data02, data03];

const CardVar = (props) => {
	return (
		<div class="col-sm">
			<div className="card" styleName="width: 18rem;">
					<img src={props.img} className="card-img-top" />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.desc}</p>
					<a href={props.url} className="btn btn-primary">{props.label}</a>
				</div>
			</div>
		</div>
	)
};

CardVar.propTypes = {
	img: propTypes.string,
	title: propTypes.string,
	desc: propTypes.string,
	url: propTypes.string,
	label: propTypes.string
};

const showData = dataSet.map((dataItem, i) => {
    return (
		<CardVar key={i} img={dataItem.image} title={dataItem.cardTitle} desc={dataItem.cardDescription} url={dataItem.button.url} label={dataItem.button.label} />
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
};

export default Card;