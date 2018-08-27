// 投票ボタンをつける

import {Component} from 'react'
import Head from 'next/head'

// それぞれの作品
class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    add(num) {
        this.setState(prevState => {
            return {
                count: prevState.count + num
            }
        })
    }
    render() {
        return (
            <div className="product">
                <div>作品名: {this.props.product.name}</div>
                <div>チーム: {this.props.product.team}</div>
                <div>
                    {this.state.count}票
                    <button onClick={e => this.add(1)}>票を増やす</button>
                    <button onClick={e => this.add(-1)}>票を減らす</button>
                </div>

                <style jsx>{`
                    .product {
                        border: 3px solid limegreen;
                        border-radius: 5px;
                        margin: 1em;
                    }
                `}</style>
            </div>
        )
    }
}

// 作品一覧を表示する
export default class extends Component {
    // 初期データを与える
    static async getInitialProps() {
        return {
            products: [
                { name: '投げ銭', team: '投げ銭' },
                { name: 'ウェーイ度カウンター', team: 'ルービックキューブ' },
                { name: '国体2018Countdown', team: '#国体好きと繋がりたい' },
                { name: 'IchigoFire', team: 'ミンティア' },
                { name: 'クイズ国体', team: 'はなれじま' },
                { name: 'YARIGAI-GO', team: 'やりがい搾取し隊' }
            ]
        }
    }

    render() {
        return(
            <div>
                <Head>
                    <meta name="viewport" content="width=device-width,initial-scale=1" />
                </Head>
                <h1>ハッカソン作品リスト</h1>
                {
                    this.props.products.map(p => <Product key={p.name} product={p}/>)
                }

                <style jsx>{`
                    h1 {
                        color: limegreen;
                    }
                `}</style>
            </div>
        )
    }
}
