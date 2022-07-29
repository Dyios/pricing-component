import { useState, useEffect } from 'react'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Slider from '@mui/material/Slider';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import CustomSwitch from './components/customSwitch'
import bgPattern from './assets/images/bg-pattern.svg'
import patternCircles from './assets/images/pattern-circles.svg'
import iconSlider from './assets/images/icon-slider.svg'
import iconCheck from './assets/images/icon-check.svg'
import pricing from './pricing.json'

const pros = ['Unlimited websites', '100% data ownership', 'Email reports']

function App() {
  const [selected, setSelected] = useState(2)
  const [priceType, setPriceType] = useState('month')

  return (
    <Stack component='main' sx={{
      backgroundImage: `url(${bgPattern})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'neutral1',
      minHeight: '100vh',
      minWidth: '100vw',
      alignItems: 'center',
    }}>
      <Stack component='header' py={6} mt={5} mb={4} sx={{
        backgroundImage: `url(${patternCircles})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        alignItems: 'center',
      }}>
        <Typography component='h1' variant='h4' color='neutral6' fontWeight='800'
          fontSize={{ xs: '1.3rem', sm: '2.125rem' }}
        >
          Simple, traffic-based pricing
        </Typography>
        <Typography component='p' variant='subtitle1' color='neutral5' fontWeight='600'
          fontSize={{ xs: '1rem', sm: '1rem' }}
          textAlign='center'
          maxWidth={{ xs: '23ch', sm: '100%' }}
        >
          Sign-up for our 30-day trial. No credit card required.
        </Typography>
      </Stack>
      <Paper component='article' sx={{
        width: '90%',
        maxWidth: '580px',
        mb: 5,
      }}>
        <Stack direction="column" py={6}>
          <Stack component='section' direction={{ xs: 'column', sm: "row" }}
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="center"
            px={6}
          >
            <Typography variant='subtitle2' fontWeight='600' color='neutral5'
              textTransform='uppercase'
              letterSpacing='0.1rem'
              sx={{
                order: { xs: '1', sm: '0' },
              }}>
              {`${pricing.monthlyPricing[selected].pageviews} Pageviews`}
            </Typography>
            <Stack direction="row"
              alignItems="center"
              sx={{
                order: { xs: '2', sm: '0' }
              }}>
              <Typography variant='h3' color='neutral6' fontWeight='800'
                fontSize={{ xs: '2rem', sm: '2.5rem' }}
                pr={1}
              >
                {`${priceType === 'month' ? pricing.monthlyPricing[selected].pricing :
                  pricing.monthlyPricing[selected].pricing * 12 * (1 - pricing.yearlyDiscount)
                  }.00`}
              </Typography>
              <Typography color='neutral5' fontWeight='600' >
                / {priceType}
              </Typography>
            </Stack>
            <Slider
              aria-label="pricing"
              aria-valuetext={`${pricing.monthlyPricing[selected].pricing}/month`}
              step={1}
              defaultValue={selected}
              min={0}
              max={pricing.monthlyPricing.length - 1}
              onChange={(e, value) => setSelected(value)}
              value={selected}
              sx={{
                order: { xs: '1', sm: '0' },
                height: '5px',
                my: 3,
                '& .MuiSlider-rail': {
                  backgroundColor: 'neutral3',
                  opacity: 1,
                },
                '& .MuiSlider-track': {
                  backgroundColor: 'primary1',
                  borderColor: 'primary1',
                },
                '& .MuiSlider-thumb': {
                  backgroundColor: 'primary2',
                  backgroundImage: `url(${iconSlider})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  width: '40px',
                  height: '40px',
                  boxShadow: '0px 10px 24px hsl(174, 77%, 80%)'
                },
                '& .MuiSlider-thumb:hover': {
                  opacity: 0.7,
                  boxShadow: 'none',
                },
              }}
            />
            <Stack direction="row" width='100%'
              justifyContent="flex-end"
              alignItems="center"
              spacing={1}
              mr={2}
              mt={{ xs: 3, sm: 2 }}
              sx={{
                order: { xs: '2', sm: '0' }
              }}>
              <Typography variant='body2' color='neutral5' fontWeight='600'>
                Monthly Billing
              </Typography>
              <CustomSwitch onChange={() => setPriceType(old => old === 'month' ? 'year' : 'month')} />
              <Typography variant='body2' color='neutral5' fontWeight='600'>
                Yearly Billing
              </Typography>
              <Typography fontSize='0.7rem' color='primary4' fontWeight='600'
                px={0.7}
                width={{ xs: '32px', sm: 'auto' }}
                overflow='hidden'
                sx={{
                  backgroundColor: 'primary3',
                  borderRadius: '0.9rem',
                  whiteSpace: 'nowrap',
                }}>
                25% discount
              </Typography>
            </Stack>
          </Stack>
          <Divider width="100%" sx={{
            mt: 5,
            mb: 3,
          }} />
          <Stack component='section' direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            px={6}
            sx={{
              order: { xs: '2', sm: '0' }
            }}>
            <Stack component='ul' direction="column" alignItems={{ xs: 'center', sm: 'normal' }}
              spacing={1}
              pl={0}
              m={0}
            >
              {
                pros.map((pro, index) => (
                  <Stack component='li' key={index} direction="row" alignItems="center" spacing={2}>
                    <img src={iconCheck} alt="check" />
                    <Typography variant='subtitle2' color='neutral5' fontWeight='600'>
                      {pro}
                    </Typography>
                  </Stack>
                ))
              }
            </Stack>
            <Button variant="contained"
              sx={{
                color: 'primary5',
                backgroundColor: "neutral6",
                textTransform: 'none',
                borderRadius: '50rem',
                px: 5,
                py: 1,
                mt: { xs: 5, sm: 0 },
                fontWeight: '600',
                '&:hover': {
                  backgroundColor: "neutral6",
                }
              }}
            >
              Start my trial
            </Button>
          </Stack>
        </Stack>
      </Paper >
    </Stack >
  )
}

export default App
