import Home from "../components/home";
import Particles from "react-tsparticles";

const IndexPage = () => {
    return (
        <>
            <Particles
                id="tsparticles"
                className="absolute mobile w-full"
                options={{
                    background: {
                        color: {
                            value: "#fff",
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: "window",
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 1,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#000",
                        },
                        links: {
                            color: "#A9A9A9",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 4,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            value: 40,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 3,
                        },
                    },
                    detectRetina: true,
                }}
            />
            <Home />
        </>
    );
};

export default IndexPage;
