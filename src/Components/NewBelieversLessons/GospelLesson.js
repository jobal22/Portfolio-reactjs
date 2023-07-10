import React, { Component } from "react";
import { Link } from "react-router-dom";
import HM from "./Menu/HM";
import CI from "../../Img/CrossIcon.png";
import "./Lessons.css";

export default class GospelLessons extends Component {
  render() {
    return (
      <div className="lessonsCage">
        <HM />
        <div className="lesTitl lc">
          <Link className="backLink" to="/modules">
            New Believer's Module
          </Link>
          <p>Lesson 1.2</p>
          {/* <img className="icon" src={CI} alt="cross icon" /> */}
          <h1 className="lesTitle">The Gospel</h1>
        </div>
        <div className="lesSect lc">
          <div className="lesSectIntro">
            <div className="lsi1 lc">
              <h4 className="lsiv">
                "For I delivered to you as of first importance what I also
                received: that Christ died for our sins in accordance with the
                Scriptures, that he was buried, that he was raised on the third
                day in accordance with the Scriptures"
              </h4>
              <h5 className="lsir">1 Corinthians 15:3-4</h5>
            </div>
            <div className="lsi2 lc">
              <h2 className="lsist">Learning Objective</h2>
              <p className="lsisti">
                By the end of this lesson, you will be able to examine your
                heart against the facts of Scripture to ask yourself, “
                <span className="bb">Am I really saved?</span>”
              </p>
            </div>
            <div className="lsi3 lc">
              <h2 className="lsist">Overview</h2>
              <p className="lsisti">
                The Gospel is very important. It functions as the answer to our
                sin problem. Through it, God offers salvation for anyone who
                believes.
              </p>
            </div>
          </div>
          <div className="lesSect1 lc">
            <h2 className="lsist">What is the Gospel?</h2>
            <p className="lsisti">
              The Gospel is the Good News of Jesus Christ. Jesus died on the
              cross for the sins of the world. After three days, He rose from
              the grave. The Gospel demonstrates our sin problem, provides a
              solution for us, and invites us to take part in a relationship
              with God. The Apostle Paul wrote that the Gospel is the power of
              God for salvation to everyone who believes (Romans 1:16). He says
              the Gospel is something to be shared, heard, and believed upon
              (Romans 10:14-15). Every person should get a chance to hear the
              Gospel (Matthew 28:18-20). Every follower of Jesus should be
              sharing the Gospel (Acts 1:8).
            </p>
            <p className="lsisti">
              This Gospel can be viewed in three parts: The Problem, The
              Solution, and The Invitation.
            </p>
          </div>
          <div className="lesSect2 lc">
            <h2 className="lsist">Gospel Explanation</h2>
            <div className="gO">
              <h3 className="gOT">The Problem:</h3>
              <h3 className="gOT1a">Sin</h3>
            </div>
            <p className="lsisti sp1">
              "for all have sinned and fall short of the glory of God" - Romans
              3:23
            </p>
            <p className="lsisti">
              Sin is disobedience to God’s commands (Genesis 3:17; Romans 5:12).
              The 10 Commandments are a great example of God’s commands. They
              are found in Exodus 20.
            </p>
            <div className="tipsa contb lc">
              <div className="numTil">
                <h3 className="nb">10 Commandments</h3>
              </div>
              <div className="tcFlex">
                <h3 className="nb">1.</h3>
                <h4 className="tipW">Put nothing before God (Exodus 20:3)</h4>
              </div>
              <div className="tcFlex">
                <h3 className="nb">2.</h3>
                <h4 className="tipW">No idols (Exodus 20:4)</h4>
              </div>
              <div className="tcFlex">
                <h3 className="nb">3.</h3>
                <h4 className="tipW">
                  Honor God with your words (Exodus 20:7)
                </h4>
              </div>
              <div className="tcFlex">
                <h3 className="nb">4.</h3>
                <h4 className="tipW">Remember the Sabbath (Exodus 20:8)</h4>
              </div>
              <div className="tcFlex">
                <h3 className="nb">5.</h3>
                <h4 className="tipW">
                  Honor your father and mother (Exodus 20:12)
                </h4>
              </div>
              <div className="tcFlex">
                <h3 className="nb">6.</h3>
                <h4 className="tipW">Do not murder (Exodus 20:13)</h4>
              </div>
              <div className="tcFlex">
                <h3 className="nb">7.</h3>
                <h4 className="tipW">Do not commit adultery (Exodus 20:14)</h4>
              </div>
              <div className="tcFlex">
                <h3 className="nb">8.</h3>
                <h4 className="tipW">Do not steal (Exodus 20:15)</h4>
              </div>
              <div className="tcFlex">
                <h3 className="nb">9.</h3>
                <h4 className="tipW">Do not lie (Exodus 20:16)</h4>
              </div>
              <div className="tcFlex">
                <h3 className="nb">10.</h3>
                <h4 className="tipW">Do not covet (Exodus 20:17)</h4>
              </div>
            </div>
            <p className="lsisti">
              Jesus summarizes all of God’s commandments under two categories:
              loving God and loving others (Matthew 22:34-40). The Bible says
              that everyone has sinned against God. Due to our disobedience, we
              are separated from God (Romans 6:23). This separation means that
              we do not know Him, and we do not have peace with Him (Ephesians
              2:11-16). Our works cannot save us (Ephesians 2:8-9) because they
              are like filthy rags to God (Isaiah 64:2).{" "}
            </p>

            <p className="lsisti">
              God knows about our sin problem. He knows more about us than we
              know about ourselves (Psalms 139:1-6). He knows that all people
              disobey Him (Romans 3:23) and cannot save themselves (Matthew
              19:26). For God to save us, our status before Him would have to
              change from wicked to righteous, the penalty for our sins would
              have to be paid, and God’s law must be satisfied. When all three
              of these requirements are met, God declares us to be innocent
              before Him because of His righteousness (Romans 3:23-26).{" "}
            </p>
            <div className="gO">
              <h3 className="gOT">The Solution: </h3>
              <h3 className="gOT1a sp">
                Jesus died on the cross and on the <br /> third day He rose from
                the grave.
              </h3>
            </div>
            <p className="lsisti sp1">
              "For I delivered to you as of first importance what I also
              received: that Christ died for our sins in accordance with the
              Scriptures, that he was buried, that he was raised on the third
              day in accordance with the Scriptures" - 1 Corinthians 15:3-4
            </p>
            <p className="lsisti">
              God’s solution to our sin problem has always been Jesus. Jesus is
              the only one able to meet all these requirements. Jesus is both
              God and man. Since He is 100% man, He grew tired (John 4:6),
              hungry (Mark 11:12), and was able to die (Romans 8:34). He was
              tempted (Hebrews 4:15), but He never sinned (2 Corinthians 5:21).
              He died for our sins on the cross (1 Corinthians 15:3).{" "}
            </p>
            <p className="lsisti">
              Jesus is also 100% God (Philippians 2:5-6). Before anything was
              created, Jesus existed (John 1:1-2). Before He was born as a man,
              He was with God the Father (John 17:5). God the Father and God the
              Son are one (John 10:30). This is one of the reasons why the
              religious leaders of His time wanted to kill Him (John 10:33).
              When Jesus died on the cross, death did not conqueror Him. Jesus
              defeated death (2 Timothy 1:10). Jesus rose from the grave on the
              third day (1 Corinthians 15:4).
            </p>
            <p className="lsisti">
              When Jesus died on the cross for our sins, it was to change our
              status before God from wicked to righteous. Christ’s death paid
              the penalty for our sin. Jesus’ death and resurrection satisfied
              God’s law. Jesus met all three requirements for God to see us as
              innocent before Him because of His righteousness (Romans 3:23-26).
            </p>
            <div className="gO">
              <h3 className="gOT">The Invitation:</h3>
              <h3 className="gOT1a">
                Repent, Believe, and Call on Jesus as Lord
              </h3>
            </div>
            <p className="lsisti sp1">
              "The time is fulfilled, and the kingdom of God is at hand; repent
              and believe in the gospel." - Mark 1:15
            </p>
            <p className="lsisti sp1">
              "...If you confess with your mouth that Jesus is Lord and believe
              in your heart that God raised him from the dead, you will be
              saved. For with the heart one believes and is justified, and with
              the mouth one confesses and is saved.” - Romans 10:9-10
            </p>
            <p className="lsisti">
              God presents a beautiful invitation for a forever relationship
              with Him. The gift of eternal life is not earned but received
              (Romans 6:23; Ephesians 2:8-9). Our works cannot save us. Only the
              work of Jesus’ death, burial, and resurrection can save us. The
              Gospel invitation is to repent, believe, and call upon Jesus as
              Lord. Jesus calls for everyone to repent and believe (Mark 1:15).
              Apart from Christ, all people are dead in sin (Ephesians 2:1) and
              destined for hell (1 Corinthians 6:9). The Gospel gives an
              invitation to turn from trusting in the world, the devil, and the
              flesh (Acts 14:15; Ephesians 2:1-3) and to turn to trusting in
              Jesus (Acts 26:20; 1 Thessalonians 1:9). As we put our faith in
              Jesus as Savior, we are to confess Him as our Lord (Romans
              10:9-10, 13).{" "}
            </p>
            <p className="lsisti">
              When we turn from not trusting in Jesus and turn to faith in
              Jesus, God saves us by His grace (Ephesians 2:8). He demonstrates
              His righteousness by changing our status before Him from wicked to
              righteous (Romans 3:24). He sees our sin debt as completely and
              forever paid (Romans 3:24). His law is satisfied (Romans 3:25), we
              are declared children (John 1:12), servants (John 13:16), and
              friends of God (John 15:15).{" "}
            </p>
          </div>
          <div className="lesSect4 lc">
            <h2 className="lsist">Examining the Heart</h2>
            <p className="lsisti">
              Have you received God’s free gift of salvation? Often, people
              confuse receive this gift of salvation in four ways.
            </p>
            <p className="lsisti s4s numW">
              1. Many people believe they are saved because they were born into
              a Christian family. It is a wonderful blessing to grow up in a
              home where the parent(s) are believers and build their home on the
              word of God. However, this does not provide salvation for you. The
              Christian home can/should provide many opportunities for you to
              hear the Gospel and trust in Jesus. But we are not saved because
              the people around us or over us are saved.
            </p>
            <hr></hr>
            <p className="lsisti s4s">
              2. Attending Church is another activity that many people believe
              saves them. Church is the gathering of believers to worship God
              and serve one another. Attending Church doesn’t confirm salvation
              for any individual. However, a biblical Church provides
              opportunities for the Gospel to be heard so that you can place
              your faith in Jesus as Lord and Savior.
            </p>
            <hr></hr>
            <p className="lsisti s4s">
              3. Often, people place their assurance of salvation in their
              baptism. Baptism is a public profession of your faith in Jesus as
              the Son of God. It is symbolic for the day that you repented of
              your sins and trust in Jesus. This means that infant baptism or
              ritual baptism doesn’t save you. In the Baptism lesson, we will
              discuss biblical baptism, which takes place after you place your
              faith in Jesus.
            </p>
            <hr></hr>
            <p className="lsisti s4s">
              4. Another unfortunate confusion many have about salvation is that
              their works or good deeds saves them. The Bible thoroughly
              explains the fact that our deeds have done nothing for us in the
              context of salvation but separate us from God. Good deeds are not
              worth placing your faith in.
            </p>
            <hr></hr>
            <p className="lsisti">
              The Apostle John wrote about receiving Jesus by faith (John
              1:11-13). We receive Jesus by faith when we repent of our sins and
              place our trust in Jesus as Lord and Savior. To “repent” means to
              change your mind or turn away from. When we repent of sin, we are
              withdrawing our faith from whatever is not Jesus. To “believe”
              mean to place your faith in or turn towards. When we believe in
              Jesus, we are placing our faith in only Him as Savior (the one who
              died on the cross and rose from the grave) and as Lord (the one
              who reigns over all things forever). We surrender all of ourselves
              to Him (1 Thessalonians 1:9).{" "}
            </p>
            <p className="lsisti">
              A great way to receive the gift of salvation is through prayer.
              There is no better way to start a relationship with God than by
              talking to Him. There are many word-by-word prayers to pray called
              “A Prayer of Salvation.” But I encourage you to speak to God about
              these three things: 1. Your sin – confess your sins to God. Now
              that you realize that these actions were against God and the very
              reason Jesus died on the cross, talk to God about your sins and
              ask for forgiveness (1 John 1:9). 2. Your faith – talk to Jesus
              about believing in Him that He died on the cross and rose from the
              grave after three days (Romans 10:9). 3. Your confession – call
              out to Him as Lord. There is no one like Him, the Forever King
              (Romans 10:10).
            </p>
            <p className="lsisti">
              If you have repented, believed, and confessed Jesus as Lord and
              Savior then according to Scripture you are saved. You have the
              free gift of a forever relationship with God and your sins (all of
              them) are forgiven.
            </p>
            <p className="lsisti">
              If you have not repented, believed, and confessed Jesus as Lord
              and Savior then according to Scripture you are not saved. But
              today can be the day that you are. What is keeping you from
              trusting Jesus? I encourage you to examine the importance of that
              issue against the importance life with Jesus. Bring this concern
              to God through prayer and to your pastor or small-group/Sunday
              School leader.
            </p>
          </div>
          <div className="tipsFlex">
            <div className="tips sub lc">
              <h2 className="tipTitl">
                If you want to be saved, talked to God about these three topics
              </h2>
            </div>
            <div className="tips cont lc">
              <div className="tcFlex">
                <h3 className="num">1.</h3>
                <h4 className="tipW">Confess Sin</h4>
              </div>
              <div className="tcFlex">
                <h3 className="num">2.</h3>
                <h4 className="tipS">
                  Believe Jesus Died and Rose from the Grave
                </h4>
              </div>
              <div className="tcFlex">
                <h3 className="num">3.</h3>
                <h4 className="tipW">Confess Jesus as Lord</h4>
              </div>
            </div>
          </div>
          <div className="lesSect5 lc">
            <h2 className="lsist">Bible Verses to Know</h2>
            <h3 className="offH">1 Corinthians 15:3-4</h3>
            <p className="lsisti">
              "For I delivered to you as of first importance what I also
              received: that Christ died for our sins in accordance with the
              Scriptures, that he was buried, that he was raised on the third
              day in accordance with the Scriptures"
            </p>
            <hr></hr>
            <h3 className="offH">Romans 6:23</h3>
            <p className="lsisti">
              "For the wages of sin is death, but the free gift of God is
              eternal life in Christ Jesus our Lord."
            </p>
            <hr></hr>
            <h3 className="offH">Romans 10:9-10</h3>
            <p className="lsisti">
              "...If you confess with your mouth that Jesus is Lord and believe
              in your heart that God raised him from the dead, you will be
              saved. For with the heart one believes and is justified, and with
              the mouth one confesses and is saved.""
            </p>
          </div>
          <div className="button">
            <Link className="buttonLink blA" to="/gettingstarted">
              <button className="buttonB">Back</button>
            </Link>
            <Link className="buttonLink blA" to="/testimony">
              <button className="buttonB">Next</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
