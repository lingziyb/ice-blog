import React, {Component} from 'react';
import './List.scss';

export default class List extends Component {

	constructor(props) {
		super(props);
		this.state = {
			articles: [
				{
					title: '美好的一天',
					content: '真的好美好的一天，可以出去玩咯真的好美好的一天，可以出去玩咯真的好美好的一天，可以出去玩咯真的好美好的一天，可以出去玩咯真的好美好的一天，可以出去玩咯真的好美好的一天，可以出去玩咯'
				},
				{
					title: 'good day1111',
					content: '相比前面2年，我的2017年的一切都开始变好起来。虽然起起伏伏，但比起一成不变，我更喜欢这样的生活。 回忆 今年养成了一个自己特别喜欢的习惯，重要的事情都发微信，特别方便回顾，也让亲朋友们觉得我就在身边。（比如，过年回家亲戚都知道我经常晚睡） 那，开始我的回忆之旅（流水账之旅 »'
				},
				{
					title: '美好的一天',
					content: '真的好美好的一天，可以出去玩咯真的好美好的一天，可以出去玩咯真的好美好的一天，可以出去玩咯真的好美好的一天，可以出去玩咯真的好美好的一天，可以出去玩咯真的好美好的一天，可以出去玩咯'
				},
				{
					title: 'good day1111',
					content: '真的好美好的一天，可以出去玩咯11111 '
				},
				{
					title: '美好的一天',
					content: '真的好美好的一天，可以出去玩咯真的好美好的一天，可以出去玩咯真的好美好的一天，可以出去玩咯真的好美好的一天，可以出去玩咯真的好美好的一天，可以出去玩咯真的好美好的一天，可以出去玩咯'
				},
				{
					title: 'good day1111',
					content: '真的好美好的一天，可以出去玩咯11111 '
				},
				{
					title: '美好的一天',
					content: '真的好美好的一天，可以出去玩咯真的好美好的一天，可以出去玩咯真的好美好的一天，可以出去玩咯真的好美好的一天，可以出去玩咯真的好美好的一天，可以出去玩咯真的好美好的一天，可以出去玩咯'
				},
				{
					title: 'good day1111',
					content: '真的好美好的一天，可以出去玩咯11111 '
				},
			],
		}
	}

	render() {
		return (
			<div className="home-list">
				<ul className="home-list-ul">
					{
						this.state.articles.map((item) => {
							return (
								<li>
									<div class="cover"></div>
									<div class="info">
										<h2>{item.title}</h2>
										<p>{item.content}</p>
										<span>三个月前发布 | 75条评论</span>
									</div>
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}