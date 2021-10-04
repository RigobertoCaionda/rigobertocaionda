import {ProjetoItem} from './styled';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import GitHubIcon from '@material-ui/icons/GitHub';
const Page = ({data}) => {
	return (
				<ProjetoItem className="project-item">
					<div className="project-image">
						<Slide>
							{data.images.map((item, key)=>(
								<div className="each-slide" key={key}>
									<img src={data.images[key]} alt="" />
								</div>
								))}
						</Slide>
					</div>
						<div className="project-title">
							<h3>{data.title}</h3>
						</div>
						<div className="project-text">
							<p>{data.description}</p>
						</div>

						<div className="project-links">
							<span>Links:</span>
							<a href={data.linksURL[0]} target="_blank" rel="noreferrer">{data.linksName[0]}</a>
							<a href={data.linksURL[1]} target="_blank" rel="noreferrer">
								<GitHubIcon style={{marginRight: 3, fontSize: '1rem'}}/>{data.linksName[1]}</a>
						</div>
				</ProjetoItem>
		);
}
export default Page;