import React from 'react'
import "./SearchPage.css";
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
function SearchPage() {
    return (
        <div className="searchpage">
            <div className="searchpage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
                
            </div>
            <hr />

            <ChannelRow 
            image="https://scontent.ffjr1-1.fna.fbcdn.net/v/t1.0-9/123326003_3550382571650302_4067570289500176668_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=ZgGOKxGK5U8AX-2sUS8&_nc_ht=scontent.ffjr1-1.fna&oh=4e6f721b2693447ae4ae414c1c830a2f&oe=5FCCCFDE"
            channel="Mitali And Yuvraj"
            verified
            subs="659K"
            videos={234}
            description="sample video description placeholder aaaa
            aaaa
            aaaa"            
            
            />
            <hr />

            <VideoRow 
            title="This is Sample Video"
            channel="Yuvraj Kolambe"
            views ="2.3M"
            channelImage="https://lh3.googleusercontent.com/-43h38o2KDbA/TiReGuvfcLI/AAAAAAAAJgI/Kyg9QanUZzIfJ_23jvu2RsuDxJXraS9UgCEwYBhgLKtQDAL1OcqweZaRlpU7FISbW2QIMEi2L6TvxN2fnk-yGiMiXv8PsqgnG6w8POuSj8h97a6vnogRCUZudqsjuVEa8bEBTkDvqNPyj6Vw7WmZ4z-idcdofPn77o2GQuVMztJbJjiB2cn7tKOzjeLjeSJaU_5JDhENa_TsvQi9PAGq_9K1UJObMf-hBfkXyQm1-AkZyoiPh7j63dlfvZ2MpGW6nn8h_w1r1SmAokx6FnkL1x5KOSPhXLXj0jcFJQVZP8Hlqrqq2cXeZP1aLozwnu8h00hBMyssvvAZH0E2-JKquuQlEpRgrl0x8NDcrrIwO4acSElh8ebsvh5RJhUadedJ8sX6qX8dVMmp_rBy6oFuFK7GIQXi7_PGg3Y-aOKSBzsosHC8QgiiUtmn7H8d18BZa-uO3z_3gtOqPAPkKgx5u3OKIHDj4n_vCiV2W9J25hcoRCAiPkGOCHOs6whkXyghbTQwZ11CqdOfpxUnzCgF3dK__58QhzDr61KyOaDk3h61qTeiwDK1ySXI2sNGr6hJhimciL_74rpRpY-RXXefZAwVC3p1iU6loSocI48VoFifHeJfI-XG_Ft4ERAwrBsuyUP0_BPR6rC6sIZvr5K2t-JBSTea4MJ-OoP0F/w140-h140-p/Attitude-Quotes-2.gif"
            image="https://scontent.ffjr1-4.fna.fbcdn.net/v/t1.0-9/123849695_3570530209635538_6270495431536657708_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=NotLfAe4obQAX8obt5y&_nc_oc=AQnZWvYZBvad8hIIl-pG_rhDJO2-W2nNKmBD8SsqipjV-k_wAKpINtjFV9G4gQR6IfGDu51nMI7dxBaOh2Bgr-26&_nc_ht=scontent.ffjr1-4.fna&oh=9e594e5a4993845affce80aa1da0a26a&oe=5FCCEE99"
            timestamp="3 days ago"
            description="dsdafda afafaf afasfasf  afasas"
            subs="659K"
            
            />
            <VideoRow 
            title="This is Sample Video"
            channel="Yuvraj Kolambe"
            views ="2.3M"
            channelImage="https://lh3.googleusercontent.com/-43h38o2KDbA/TiReGuvfcLI/AAAAAAAAJgI/Kyg9QanUZzIfJ_23jvu2RsuDxJXraS9UgCEwYBhgLKtQDAL1OcqweZaRlpU7FISbW2QIMEi2L6TvxN2fnk-yGiMiXv8PsqgnG6w8POuSj8h97a6vnogRCUZudqsjuVEa8bEBTkDvqNPyj6Vw7WmZ4z-idcdofPn77o2GQuVMztJbJjiB2cn7tKOzjeLjeSJaU_5JDhENa_TsvQi9PAGq_9K1UJObMf-hBfkXyQm1-AkZyoiPh7j63dlfvZ2MpGW6nn8h_w1r1SmAokx6FnkL1x5KOSPhXLXj0jcFJQVZP8Hlqrqq2cXeZP1aLozwnu8h00hBMyssvvAZH0E2-JKquuQlEpRgrl0x8NDcrrIwO4acSElh8ebsvh5RJhUadedJ8sX6qX8dVMmp_rBy6oFuFK7GIQXi7_PGg3Y-aOKSBzsosHC8QgiiUtmn7H8d18BZa-uO3z_3gtOqPAPkKgx5u3OKIHDj4n_vCiV2W9J25hcoRCAiPkGOCHOs6whkXyghbTQwZ11CqdOfpxUnzCgF3dK__58QhzDr61KyOaDk3h61qTeiwDK1ySXI2sNGr6hJhimciL_74rpRpY-RXXefZAwVC3p1iU6loSocI48VoFifHeJfI-XG_Ft4ERAwrBsuyUP0_BPR6rC6sIZvr5K2t-JBSTea4MJ-OoP0F/w140-h140-p/Attitude-Quotes-2.gif"
            image="https://scontent.ffjr1-4.fna.fbcdn.net/v/t1.0-9/123849695_3570530209635538_6270495431536657708_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=NotLfAe4obQAX8obt5y&_nc_oc=AQnZWvYZBvad8hIIl-pG_rhDJO2-W2nNKmBD8SsqipjV-k_wAKpINtjFV9G4gQR6IfGDu51nMI7dxBaOh2Bgr-26&_nc_ht=scontent.ffjr1-4.fna&oh=9e594e5a4993845affce80aa1da0a26a&oe=5FCCEE99"
            timestamp="3 days ago"
            description="dsdafda afafaf afasfasf  afasas"
            subs="659K"
            
            />
            <VideoRow 
            title="This is Sample Video"
            channel="Yuvraj Kolambe"
            views ="2.3M"
            channelImage="https://lh3.googleusercontent.com/-43h38o2KDbA/TiReGuvfcLI/AAAAAAAAJgI/Kyg9QanUZzIfJ_23jvu2RsuDxJXraS9UgCEwYBhgLKtQDAL1OcqweZaRlpU7FISbW2QIMEi2L6TvxN2fnk-yGiMiXv8PsqgnG6w8POuSj8h97a6vnogRCUZudqsjuVEa8bEBTkDvqNPyj6Vw7WmZ4z-idcdofPn77o2GQuVMztJbJjiB2cn7tKOzjeLjeSJaU_5JDhENa_TsvQi9PAGq_9K1UJObMf-hBfkXyQm1-AkZyoiPh7j63dlfvZ2MpGW6nn8h_w1r1SmAokx6FnkL1x5KOSPhXLXj0jcFJQVZP8Hlqrqq2cXeZP1aLozwnu8h00hBMyssvvAZH0E2-JKquuQlEpRgrl0x8NDcrrIwO4acSElh8ebsvh5RJhUadedJ8sX6qX8dVMmp_rBy6oFuFK7GIQXi7_PGg3Y-aOKSBzsosHC8QgiiUtmn7H8d18BZa-uO3z_3gtOqPAPkKgx5u3OKIHDj4n_vCiV2W9J25hcoRCAiPkGOCHOs6whkXyghbTQwZ11CqdOfpxUnzCgF3dK__58QhzDr61KyOaDk3h61qTeiwDK1ySXI2sNGr6hJhimciL_74rpRpY-RXXefZAwVC3p1iU6loSocI48VoFifHeJfI-XG_Ft4ERAwrBsuyUP0_BPR6rC6sIZvr5K2t-JBSTea4MJ-OoP0F/w140-h140-p/Attitude-Quotes-2.gif"
            image="https://scontent.ffjr1-4.fna.fbcdn.net/v/t1.0-9/123849695_3570530209635538_6270495431536657708_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=NotLfAe4obQAX8obt5y&_nc_oc=AQnZWvYZBvad8hIIl-pG_rhDJO2-W2nNKmBD8SsqipjV-k_wAKpINtjFV9G4gQR6IfGDu51nMI7dxBaOh2Bgr-26&_nc_ht=scontent.ffjr1-4.fna&oh=9e594e5a4993845affce80aa1da0a26a&oe=5FCCEE99"
            timestamp="3 days ago"
            description="dsdafda afafaf afasfasf  afasas"
            subs="659K"
            
            />
            <VideoRow 
            title="This is Sample Video"
            channel="Yuvraj Kolambe"
            views ="2.3M"
            channelImage="https://lh3.googleusercontent.com/-43h38o2KDbA/TiReGuvfcLI/AAAAAAAAJgI/Kyg9QanUZzIfJ_23jvu2RsuDxJXraS9UgCEwYBhgLKtQDAL1OcqweZaRlpU7FISbW2QIMEi2L6TvxN2fnk-yGiMiXv8PsqgnG6w8POuSj8h97a6vnogRCUZudqsjuVEa8bEBTkDvqNPyj6Vw7WmZ4z-idcdofPn77o2GQuVMztJbJjiB2cn7tKOzjeLjeSJaU_5JDhENa_TsvQi9PAGq_9K1UJObMf-hBfkXyQm1-AkZyoiPh7j63dlfvZ2MpGW6nn8h_w1r1SmAokx6FnkL1x5KOSPhXLXj0jcFJQVZP8Hlqrqq2cXeZP1aLozwnu8h00hBMyssvvAZH0E2-JKquuQlEpRgrl0x8NDcrrIwO4acSElh8ebsvh5RJhUadedJ8sX6qX8dVMmp_rBy6oFuFK7GIQXi7_PGg3Y-aOKSBzsosHC8QgiiUtmn7H8d18BZa-uO3z_3gtOqPAPkKgx5u3OKIHDj4n_vCiV2W9J25hcoRCAiPkGOCHOs6whkXyghbTQwZ11CqdOfpxUnzCgF3dK__58QhzDr61KyOaDk3h61qTeiwDK1ySXI2sNGr6hJhimciL_74rpRpY-RXXefZAwVC3p1iU6loSocI48VoFifHeJfI-XG_Ft4ERAwrBsuyUP0_BPR6rC6sIZvr5K2t-JBSTea4MJ-OoP0F/w140-h140-p/Attitude-Quotes-2.gif"
            image="https://scontent.ffjr1-4.fna.fbcdn.net/v/t1.0-9/123849695_3570530209635538_6270495431536657708_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=NotLfAe4obQAX8obt5y&_nc_oc=AQnZWvYZBvad8hIIl-pG_rhDJO2-W2nNKmBD8SsqipjV-k_wAKpINtjFV9G4gQR6IfGDu51nMI7dxBaOh2Bgr-26&_nc_ht=scontent.ffjr1-4.fna&oh=9e594e5a4993845affce80aa1da0a26a&oe=5FCCEE99"
            timestamp="3 days ago"
            description="dsdafda afafaf afasfasf  afasas"
            subs="659K"
            
            />
            <VideoRow 
            title="This is Sample Video"
            channel="Yuvraj Kolambe"
            views ="2.3M"
            channelImage="https://lh3.googleusercontent.com/-43h38o2KDbA/TiReGuvfcLI/AAAAAAAAJgI/Kyg9QanUZzIfJ_23jvu2RsuDxJXraS9UgCEwYBhgLKtQDAL1OcqweZaRlpU7FISbW2QIMEi2L6TvxN2fnk-yGiMiXv8PsqgnG6w8POuSj8h97a6vnogRCUZudqsjuVEa8bEBTkDvqNPyj6Vw7WmZ4z-idcdofPn77o2GQuVMztJbJjiB2cn7tKOzjeLjeSJaU_5JDhENa_TsvQi9PAGq_9K1UJObMf-hBfkXyQm1-AkZyoiPh7j63dlfvZ2MpGW6nn8h_w1r1SmAokx6FnkL1x5KOSPhXLXj0jcFJQVZP8Hlqrqq2cXeZP1aLozwnu8h00hBMyssvvAZH0E2-JKquuQlEpRgrl0x8NDcrrIwO4acSElh8ebsvh5RJhUadedJ8sX6qX8dVMmp_rBy6oFuFK7GIQXi7_PGg3Y-aOKSBzsosHC8QgiiUtmn7H8d18BZa-uO3z_3gtOqPAPkKgx5u3OKIHDj4n_vCiV2W9J25hcoRCAiPkGOCHOs6whkXyghbTQwZ11CqdOfpxUnzCgF3dK__58QhzDr61KyOaDk3h61qTeiwDK1ySXI2sNGr6hJhimciL_74rpRpY-RXXefZAwVC3p1iU6loSocI48VoFifHeJfI-XG_Ft4ERAwrBsuyUP0_BPR6rC6sIZvr5K2t-JBSTea4MJ-OoP0F/w140-h140-p/Attitude-Quotes-2.gif"
            image="https://scontent.ffjr1-4.fna.fbcdn.net/v/t1.0-9/123849695_3570530209635538_6270495431536657708_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=NotLfAe4obQAX8obt5y&_nc_oc=AQnZWvYZBvad8hIIl-pG_rhDJO2-W2nNKmBD8SsqipjV-k_wAKpINtjFV9G4gQR6IfGDu51nMI7dxBaOh2Bgr-26&_nc_ht=scontent.ffjr1-4.fna&oh=9e594e5a4993845affce80aa1da0a26a&oe=5FCCEE99"
            timestamp="3 days ago"
            description="dsdafda afafaf afasfasf  afasas"
            subs="659K"
            
            />
            <VideoRow 
            title="This is Sample Video"
            channel="Yuvraj Kolambe"
            views ="2.3M"
            channelImage="https://lh3.googleusercontent.com/-43h38o2KDbA/TiReGuvfcLI/AAAAAAAAJgI/Kyg9QanUZzIfJ_23jvu2RsuDxJXraS9UgCEwYBhgLKtQDAL1OcqweZaRlpU7FISbW2QIMEi2L6TvxN2fnk-yGiMiXv8PsqgnG6w8POuSj8h97a6vnogRCUZudqsjuVEa8bEBTkDvqNPyj6Vw7WmZ4z-idcdofPn77o2GQuVMztJbJjiB2cn7tKOzjeLjeSJaU_5JDhENa_TsvQi9PAGq_9K1UJObMf-hBfkXyQm1-AkZyoiPh7j63dlfvZ2MpGW6nn8h_w1r1SmAokx6FnkL1x5KOSPhXLXj0jcFJQVZP8Hlqrqq2cXeZP1aLozwnu8h00hBMyssvvAZH0E2-JKquuQlEpRgrl0x8NDcrrIwO4acSElh8ebsvh5RJhUadedJ8sX6qX8dVMmp_rBy6oFuFK7GIQXi7_PGg3Y-aOKSBzsosHC8QgiiUtmn7H8d18BZa-uO3z_3gtOqPAPkKgx5u3OKIHDj4n_vCiV2W9J25hcoRCAiPkGOCHOs6whkXyghbTQwZ11CqdOfpxUnzCgF3dK__58QhzDr61KyOaDk3h61qTeiwDK1ySXI2sNGr6hJhimciL_74rpRpY-RXXefZAwVC3p1iU6loSocI48VoFifHeJfI-XG_Ft4ERAwrBsuyUP0_BPR6rC6sIZvr5K2t-JBSTea4MJ-OoP0F/w140-h140-p/Attitude-Quotes-2.gif"
            image="https://scontent.ffjr1-4.fna.fbcdn.net/v/t1.0-9/123849695_3570530209635538_6270495431536657708_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=NotLfAe4obQAX8obt5y&_nc_oc=AQnZWvYZBvad8hIIl-pG_rhDJO2-W2nNKmBD8SsqipjV-k_wAKpINtjFV9G4gQR6IfGDu51nMI7dxBaOh2Bgr-26&_nc_ht=scontent.ffjr1-4.fna&oh=9e594e5a4993845affce80aa1da0a26a&oe=5FCCEE99"
            timestamp="3 days ago"
            description="dsdafda afafaf afasfasf  afasas"
            subs="659K"
            
            />
            <VideoRow 
            title="This is Sample Video"
            channel="Yuvraj Kolambe"
            views ="2.3M"
            channelImage="https://lh3.googleusercontent.com/-43h38o2KDbA/TiReGuvfcLI/AAAAAAAAJgI/Kyg9QanUZzIfJ_23jvu2RsuDxJXraS9UgCEwYBhgLKtQDAL1OcqweZaRlpU7FISbW2QIMEi2L6TvxN2fnk-yGiMiXv8PsqgnG6w8POuSj8h97a6vnogRCUZudqsjuVEa8bEBTkDvqNPyj6Vw7WmZ4z-idcdofPn77o2GQuVMztJbJjiB2cn7tKOzjeLjeSJaU_5JDhENa_TsvQi9PAGq_9K1UJObMf-hBfkXyQm1-AkZyoiPh7j63dlfvZ2MpGW6nn8h_w1r1SmAokx6FnkL1x5KOSPhXLXj0jcFJQVZP8Hlqrqq2cXeZP1aLozwnu8h00hBMyssvvAZH0E2-JKquuQlEpRgrl0x8NDcrrIwO4acSElh8ebsvh5RJhUadedJ8sX6qX8dVMmp_rBy6oFuFK7GIQXi7_PGg3Y-aOKSBzsosHC8QgiiUtmn7H8d18BZa-uO3z_3gtOqPAPkKgx5u3OKIHDj4n_vCiV2W9J25hcoRCAiPkGOCHOs6whkXyghbTQwZ11CqdOfpxUnzCgF3dK__58QhzDr61KyOaDk3h61qTeiwDK1ySXI2sNGr6hJhimciL_74rpRpY-RXXefZAwVC3p1iU6loSocI48VoFifHeJfI-XG_Ft4ERAwrBsuyUP0_BPR6rC6sIZvr5K2t-JBSTea4MJ-OoP0F/w140-h140-p/Attitude-Quotes-2.gif"
            image="https://scontent.ffjr1-4.fna.fbcdn.net/v/t1.0-9/123849695_3570530209635538_6270495431536657708_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=NotLfAe4obQAX8obt5y&_nc_oc=AQnZWvYZBvad8hIIl-pG_rhDJO2-W2nNKmBD8SsqipjV-k_wAKpINtjFV9G4gQR6IfGDu51nMI7dxBaOh2Bgr-26&_nc_ht=scontent.ffjr1-4.fna&oh=9e594e5a4993845affce80aa1da0a26a&oe=5FCCEE99"
            timestamp="3 days ago"
            description="dsdafda afafaf afasfasf  afasas"
            subs="659K"
            
            />
        </div>
    )
}

export default SearchPage
