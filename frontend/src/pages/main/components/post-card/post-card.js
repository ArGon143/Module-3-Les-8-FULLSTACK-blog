import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '../../../../components';
import { Link } from 'react-router-dom';

const PostCardContainer = ({
	className,
	id,
	title,
	imageUrl,
	publishedAt,
	commentsCount,
}) => {
	return (
		<div className={className}>
			<Link to={`/post/${id}`}>
				<img src={imageUrl} alt={title} />
				<div className="post-card-footer">
					<h4>{title}</h4>
					<div className="post-card-info">
						<div className="published-at">
							<Icon
								inactive={true}
								id="fa-calendar-o"
								size="18px"
								margin="0 7px 0 0"
							/>
							{publishedAt}
						</div>
						<div className="comments-count">
							<Icon
								inactive={true}
								id="fa-comment-o"
								size="18px"
								margin="0 7px 0 0"
							/>
							{commentsCount}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export const PostCard = styled(PostCardContainer)`
	position: relative;

	display: flex;
	flex-direction: column;
	width: 280px;
	margin: 20px;
	border: 1px solid #000;
	border-radius: 7px;

	& img {
		display: block;
		width: 100%;
	}

	& .post-card-footer {
		padding: 5px;
		border-top: 1px solid #000;
	}

	& h4 {
		margin: 0;
		margin-bottom: 30px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		width: 270px;
	}

	& .post-card-info {
		width: 100%;
		position: absolute;
		bottom: 0;
		padding: 0 10px 5px 0;
		display: flex;
		justify-content: space-between;
	}

	& .published-at {
		display: flex;
		align-items: center;
	}

	& .comments-count {
		display: flex;
		align-items: center;
	}
`;
PostCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	commentsCount: PropTypes.number.isRequired,
};
