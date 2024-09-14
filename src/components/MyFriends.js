import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import myfriends from '../constants/myfriends.js';

export default function CardGrid() {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
                justifyContent: 'center',
                padding: '20px',
                width: '100%',
                maxWidth: '1200px',
                margin: '0 auto',
            }}
        >
            {myfriends.map((item) => (
                <Card sx={{ maxWidth: 345, margin: 2 }} key={item.id}>
                    <CardMedia
                        component="img"
                        image={item.img}
                        sx={{ height: 140 }}
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {item.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Age: {item.age}
                            <br />
                            Hobby: {item.hobby}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}