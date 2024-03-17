import CardIcon from "../Card/Card-icon";
import CardImage from "../Card/Card-image";
import CardHolder from "../CardHolder";


export default function Homepage({children}) {   //private note: export is used to make the file available
    

    const features=[
        {title:"Online Banking", body:"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.", imageUrl:"this is image1", author: ""}, 
        {title:"Simple Budgeting", body:"See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.", imageUrl:"this is image2", author: ""},
        {title:"Fast Onboarding", body:"We don’t do branches. Open your account in minutes online and start taking control of your finances right away.", imageUrl:"this is image3", author: ""},
        {title:"Open API", body:"Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.", imageUrl:"this is image4", author: ""},
    ]

    const articles=[
        {title:"Receive money in any currency with no fees", body:"The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …", imageUrl:"this is image1", author: "By Claire Robinson"}, 
        {title:"Treat yourself without worrying about money", body:"Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …", imageUrl:"this is image2", author: "By Wilson Hutton"},
        {title:"Take your Easybank card wherever you go", body:"We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …", imageUrl:"this is image3", author: "By Wilson Hutton"},
        {title:"Our invite-only Beta accounts are now live!", body:"After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...", imageUrl:"this is image4", author: "By Claire Robinson"},
    ]

    return (
            <div>
                <div>
                    <CardHolder
                    title="Why choose Easybank?"
                    description="We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before."
                    bgColor="hsl(220, 16%, 96%)"
                    card= {features.map((feature,index) => (
                        <CardIcon key={index}
                          title={feature.title} 
                          body={feature.body}
                          imageUrl={feature.imageUrl}
                          author={feature.author}/>))
                        }
                        />
                </div>
                <div>
                
                    title="Latest Articles"
                    </div>        
                {articles.map((article,index) => (
                <CardImage key={index}
                    title={article.title} 
                    body={article.body}
                    imageUrl={article.imageUrl}
                    author={article.author}/>))
            }
             </div>
        
    );

}