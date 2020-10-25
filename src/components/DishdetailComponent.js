import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
	constructor(props) {
		super(props);
	}

	renderDishDetails(dish) {
		if (dish != null)
			return (
				<Card key={dish.id}>
					<CardImg width='100%' src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			);
		else return <div />;
	}

	renderComments(dish) {
		console.log(dish);
		if (dish) {
			if (dish.comments) {
				return dish.comments.map((comment) => {
					return (
						<li key={comment.id}>
							<p>{comment.comment}</p>
							<p>
								-- {comment.author}, &nbsp;
								{new Intl.DateTimeFormat('en-US', {
									day: '2-digit',
									month: 'long',
									year: 'numeric'
								}).format(new Date(comment.date))}
							</p>
						</li>
					);
				});
			}
		}

		return <div />;
	}

	render() {
    if(this.props.dish){

    
		return (
			<>
				<div className='col-12 col-md-5 m-1'>{this.renderDishDetails(this.props.dish)}</div>
				<div className='col-12 col-md-5 m-1'>
					<h3>Comments</h3>
					<ul className='list-unstyled'>{this.renderComments(this.props.dish)}</ul>
				</div>
			</>
    );
  }

  return(<div/>)
	}
}

export default DishDetail;
