// ハッカソンの作品一覧を表示する

import {Component} from 'react'

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
                <h1>ハッカソン作品リスト</h1>
                {
                    this.props.products.map(p => <div key={p.name}>{p.name}</div>)
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
