import { useEffect, useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, FlatList, Keyboard, Alert } from "react-native";
import { colors, fonts, metrics } from "../../values";
import { AntDesign } from '@expo/vector-icons';

import { Task } from "../../types";

import { Header } from "../../components/Header";
import { Counters } from "../../components/Counters";
import { TodoListItem } from "../../components/TodoListItem";
import { EmptyListItem } from "../../components/EmptyListItem";

export function HomeScreen() {

    const [taskDescription, setTaskDescription] = useState<string>('')
    const [taskList, setTaskList] = useState<Task[]>([])
    const [completedTasks, setCompletedTasks] = useState<number>(0)


    useEffect(() => {
        const completed = taskList.filter(task => task.isDone)
        setCompletedTasks(completed.length)
    }, [taskList])


    function handleTaskAdd() {

        if (taskDescription === '') return

        const newTask: Task = {
            id: Date.now(),
            description: taskDescription,
            isDone: false
        }

        setTaskList(prevState => [...prevState, newTask])

        setTaskDescription('')
        Keyboard.dismiss()
    }


    function handleTaskDel(id: number) {
        Alert.alert(
            'Deletar Tarefa',
            'Deseja mesmo deletar esta tarefa?', [
                {
                    text: 'Sim',
                    onPress: () => setTaskList(prevState => prevState.filter(task => task.id !== id))
                },
                { text: 'Não' }
            ])
        
    }


    function handleTaskToggle(id: number) {
        setTaskList(prevState => prevState.map(task => {
            if (task.id === id) {
                return {...task, isDone: !task.isDone}
            }

            return task
        }))
    }

    
    return (
        <View style={styles.container}>
            
            <Header />

            <View style={styles.group}>
                <TextInput
                    value={taskDescription}
                    onChangeText={setTaskDescription}
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={colors.gray300}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleTaskAdd}
                >
                    <AntDesign name="pluscircleo" size={fonts.regular} color={colors.gray100} />
                </TouchableOpacity>
            </View>
            
            <Counters created={taskList.length} completed={completedTasks}/>

            <FlatList
                style={styles.list}
                data={taskList}
                renderItem={({ item }) => (
                    <TodoListItem 
                        data={item} 
                        onDelete={() => handleTaskDel(item.id)}
                        onToggle={() => handleTaskToggle(item.id)}
                    />
                )}
                keyExtractor={(item) => String(item.id)}
                ListEmptyComponent={() => (
                    <EmptyListItem />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray600
    },
    group: {
        position: 'absolute',
        top: metrics.statusBarHeight + 110,
        zIndex: metrics.layer.front,
        height: 54,
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: metrics.size.bigger
    },
    input: {
        height: 54,
        flex: 1,
        backgroundColor: colors.gray500,
        borderRadius: metrics.borderRadius,
        borderWidth: 2,
        borderColor: colors.gray700,
        marginRight: metrics.size.tiny,
        paddingHorizontal: metrics.size.regular,
        fontSize: fonts.regular,
        color: colors.gray100
    },
    button: {
        width: 54,
        height: 54,
        backgroundColor: colors.primaryDark,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: metrics.borderRadius
    },
    list: {
        paddingHorizontal: metrics.size.bigger
    }
})