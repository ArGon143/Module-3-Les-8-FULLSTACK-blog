import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '../../../../components';

const PaginationContainer = ({ className, page, lastPage, setPage }) => {
	return (
		<div className={className}>
			<Button disabled={page === 1} onClick={() => setPage(1)}>
				В начало
			</Button>
			<Button disabled={page === 1} onClick={() => setPage(page - 1)}>
				Предыдущая
			</Button>
			<div className="current-page">Страница: {page}</div>
			<Button disabled={page === lastPage} onClick={() => setPage(page + 1)}>
				Следующая
			</Button>
			<Button disabled={page === lastPage} onClick={() => setPage(lastPage)}>
				В конец
			</Button>
		</div>
	);
};

export const Pagination = styled(PaginationContainer)`
	display: flex;
	jestify-content: center;
	position: absolute;
	bottom: 140px;
	padding: 0 35px;
	width: 100%;

	& button {
		margin: 0 5px;
	}

	& .current-page {
		font-size: 18px;
		font-weight: 500;
		line-height: 26px;
		width: 100%;
		height: 32px;
		text-align: center;
		border: 1px solid #000;
		margin: 0 5px;
	}
`;

Pagination.propTypes = {
	page: PropTypes.number.isRequired,
	lastPage: PropTypes.number,
	setPage: PropTypes.func.isRequired,
};
