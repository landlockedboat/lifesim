import { Grid, Button } from "@nextui-org/react"
import React from "react"

const ActionButton = ({ description, emoji }: { description: string, emoji: string }) => {
    return (
        <Button style={{ height: "8vh", width: "19.25vw" }} >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <p>{emoji}</p>
                <p style={{ fontSize: "9px" }}>{description}</p>
            </div>
        </Button>)
}

export const ActionButtons = ({ ageUp }) => {
    return (
        <Grid.Container>
            <Grid xs={12}>
                <Button.Group size="xs" rounded style={{ alignItems: "center" }} color="gradient">
                    <ActionButton emoji={"💼"} description="Occupation" />
                    <ActionButton emoji={"💰"} description="Assets" />
                    <Button
                        onClick={ageUp}
                        style={{ height: "19.25vw", width: "19.25vw", borderRadius: "10%", padding: "-20px", background: "linear-gradient(139deg, rgb(255 100 168) 0%, rgb(0 255 118) 100%)" }}
                    >

                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <p>💗</p>
                            <p style={{ fontSize: "9px" }}>Age Up!</p>
                        </div>
                    </Button>
                    <ActionButton emoji={"❤️"} description="Relationships" />
                    <ActionButton emoji={"🔎"} description="Activities" />
                </Button.Group>
            </Grid>
        </Grid.Container>
    )
}