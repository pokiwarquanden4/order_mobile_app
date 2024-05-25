import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from 'react-native-paper';
import { useState } from 'react';
import ProfilePage from '@/components/Profile';
import Schedule from '@/components/Schedule';
import Money from '@/components/Money';
import JobDescriptions from '@/components/JobDescriptions';
import CreateAccount from '@/components/CreateAccount';
import CreateSchedule from '@/components/CreateSchedule';
import CreateMoney from '@/components/CreateMoney';
import CreateAboutYourJob from '@/components/CreateAboutYourJob';

const pageList = ['Profile', 'Timekeeping', 'Money', 'About Your Jobs', 'Create new account', 'Create new schedule', 'Create Money', 'Create Job Description']

export default function TabTwoScreen() {
  const [page, setPage] = useState<string | undefined>(undefined)

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      {!page
        ?
        <>
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Hello Quang</ThemedText>
          </ThemedView>
          <ThemedText>This is your infomations</ThemedText>
          <Button contentStyle={styles.button} icon="human" mode="outlined" onPress={() => setPage(pageList[0])}>
            Your Profile
          </Button>
          <Button contentStyle={styles.button} icon="clock" mode="outlined" onPress={() => setPage(pageList[1])}>
            Timekeeping
          </Button>
          <Button contentStyle={styles.button} icon="cash" mode="outlined" onPress={() => setPage(pageList[2])}>
            Money
          </Button>
          <Button contentStyle={styles.button} icon="table" mode="outlined" onPress={() => setPage(pageList[3])}>
            About Your Jobs
          </Button>
          <Button contentStyle={styles.button} icon="table" mode="outlined" onPress={() => setPage(pageList[4])}>
            Create new account
          </Button>
          <Button contentStyle={styles.button} icon="table" mode="outlined" onPress={() => setPage(pageList[5])}>
            Create new schedule
          </Button>
          <Button contentStyle={styles.button} icon="table" mode="outlined" onPress={() => setPage(pageList[6])}>
            Create money
          </Button>
          <Button contentStyle={styles.button} icon="table" mode="outlined" onPress={() => setPage(pageList[7])}>
            Create Job Description
          </Button>
          <Button contentStyle={styles.button} icon="exit-to-app" mode="outlined">
            Log out
          </Button>
        </>
        :
        undefined
      }
      {/* Profile */}
      {page === pageList[0]
        ?
        <View>
          <ProfilePage setPage={setPage}></ProfilePage>
        </View>
        :
        undefined
      }

      {/* TimeKeeping */}
      {page === pageList[1]
        ?
        <View>
          <Schedule setPage={setPage}></Schedule>
        </View>
        :
        undefined
      }

      {/* Money */}
      {page === pageList[2]
        ?
        <View>
          <Money setPage={setPage}></Money>
        </View>
        :
        undefined
      }

      {/* About Your Jobs */}
      {page === pageList[3]
        ?
        <View>
          <JobDescriptions setPage={setPage}></JobDescriptions>
        </View>
        :
        undefined
      }

      {/* Create new account */}
      {page === pageList[4]
        ?
        <View>
          <CreateAccount setPage={setPage}></CreateAccount>
        </View>
        :
        undefined
      }

      {/* Create new schedule */}
      {page === pageList[5]
        ?
        <View>
          <CreateSchedule setPage={setPage}></CreateSchedule>
        </View>
        :
        undefined
      }

      {/* Create money */}
      {page === pageList[6]
        ?
        <View>
          <CreateMoney setPage={setPage}></CreateMoney>
        </View>
        :
        undefined
      }

      {/* Create Job Description */}
      {page === pageList[7]
        ?
        <View>
          <CreateAboutYourJob setPage={setPage}></CreateAboutYourJob>
        </View>
        :
        undefined
      }
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    flexDirection: 'row', // Arrange elements horizontally
    alignItems: 'center', // Align content vertically in the center
    justifyContent: 'flex-start', // Move content to the right end
  },
});
