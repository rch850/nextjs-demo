// 作品をコンポーネントにする

import {Component} from 'react'
import Head from 'next/head'

// それぞれの作品
class Product extends Component {
    render() {
        return(
            <div>{this.props.product.name}</div>
        )
    }
}

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
